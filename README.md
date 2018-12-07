# AngularTrivia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notions :
- [x] Template Driven Form
- [x] Model Driven Form (Reactive Form)
- [x] Appel HTTP
- [x] Service
- [x] Routing
- [x] Route resolver
- [x] Guard
- [ ] Directive
- [ ] Custom directive
- [ ] Pipi
- [ ] Custom pipe
- [ ] @Input
- [ ] @Output

## 1. Création d'un formulaire

L'URL de base de l'API est https://opentdb.com/api.php, elle doit être complété avec une **query string**, acceptant 4 paramètres :
* amount : nombre de questions à récupérer (max `50`)
* category : identifiant de la catégorie (entre `9` et `32` voir [api_category.php](https://opentdb.com/api_category.php))
* difficulty : difficulté des questions (`easy`, `medium`, `hard`)
* type : type de réponse, vrai ou faux (`boolean`) ou multiple (`multiple`)

Le formulaire doit permettre de recherche des questions sur l'API : https://opentdb.com/. Il sera composé des champs suivants :

* un champ `Nombre de question` de type `number` et doit être requis.
* un champ `Categorie` de type `text`.
* un champ `Difficulté` de type `text`.
* un champ `Type` de type `text`. 
* un bouton `Afficher` de type `submit`.
* un bouton `Annuler` de type `reset`.

A l'envoie du formulaire, génère l'url d'appel à l'API et affiche la dans la console de ton navigateur. L'URL devrait ressembler à quelque chose comme :\
https://opentdb.com/api.php?amount=25

https://opentdb.com/api.php?difficulty=hard&type=boolean&amount=25

https://opentdb.com/api.php?amount=12&difficulty=medium&category=9&type=boolean

https://opentdb.com/api.php?type=multiple&amount=25&category=9&difficulty=easy
...

BONUS :
* Utilise la balise `<select>` pour les champs `Difficulté`, `Type` (code les valeurs en durs).
* Fait appel à l'api https://opentdb.com/api_category.php pour récupérer la liste des catégories et remplis la balise `<select>`.

## 1.1 BONUS : Création d'un formulaire (bis)

Refait le même formulaire (dans un nouveau component) mais cette fois en utilisant un `reactive form` (FormGroup, FormControl) si tu avais fait un `template driven form` (ngModel), sinon fait l'inverse.

## 2. Service d'appel à l'API opentdb.com/api.php

* Créer un service avec une méthode `search`, elle prendra en paramètre les paramètres nécessaire pour générer l'URL précédente. 
* Tu peux déporter le code qui te servait à générer l'URL dans ton service.\
* Injecte le service `HttpClient`, utilise le pour intérroger l'API avec l'url générée et affiche les questions récupérés en dessous de ton formulaire.\

**ATTENTION ! L'URL généré ne renvois pas forcement de question en fonction des critères renseignés**
* Créer un service pour faire appel à l'API, retire l'injection du service `HttpClient` dans tes components et utilise ton service à la place.

## 3. Formulaire d'authentification

Créer un formulaire d'authentification avec les champs suivants :
* `Username` de type string et doit être requis
* `Password` de type password et doit être requis.

L'envoie du formulaire doit être déclenché par l'événement `ngSubmit` de la directive `ngForm` (pour l'instant l'envoie du formulaire ne déclenche)

## 4. Service d'autentification

Créer un service, qui comportera deux méthodes :
* `login` qui vérifira le valeur du champ `Username` et `Password` (libre à toi de choisir la condition). Une fois la condidition validé, ajoute une variable `isLogin` a `true` dans le `sessionStorage` ou `localStorage` pour sauvgarder le login. La fonction doit aussi renvoyer `true` si l'autentification réussi sinon `false`.
* `logout` supprimera la valeur dans le `sessionStorage` ou `localStorage`.

Injecte ton service dans ton formulaire d'autentifcation, à l'envoie utilise ton service pour vérifier les valeurs saisies. A l'aide du `Storage Inspetor` de ton navigateur vérifie si `isLogin` a bien été ajouté.

BONUS :
* Au lieu de retourner un boolean, retourne un observable qui en cas de succés renvoie `true` dans le callback `next` sinon renvoie `false` dans le callback `error`

## 5. Routing

Ressources : 
* [router guide](https://angular.io/guide/router)
* [API Router navigate](https://angular.io/api/router/Router#navigate)
* [API NavigationExtras queryParams](https://angular.io/api/router/NavigationExtras#queryParams)
* [queryParams](https://angular-2-training-book.rangle.io/handout/routing/query_params.html)
* [routerLink directive](https://angular.io/api/router/RouterLink#description)

Créer 3 routes et un menu :

### 5.1 /login

/login affiche le formulaire d'authentification.\
* Si l'authentification est un succés tu dois renvoyer l'utilisateur sur la route `/search`.
* Sinon reste sur la route `/login` mais indique à l'utilisateur que l'autentification a échoué (en affichant un message en dessous du formulaire).

### 5.2 /search et /results

/search qui affiche le formulaire de recherche.\
/result qui affiche le résultat de la recherche.

Plusieurs possibilités s'offre à toi :
* Récuperer le résultat de l'API dans le formulaire de recherche et ensuite envoyer les données vers la page de resultat pour afficher les questions.
* Envoyer les paramètres vers la page de résultat via la propriété `queryParams` et ce sera le composant de cette page qui se chargera d'appeler l'API avec les bons paramètres

### 5.3 Menu 

Créer un composant menu qui sera afficher sur chaque route, il te permettera de naviguer entre les différentes vues de ton application à l'aide de la directive `routerLink`.
* Tu devrais au minimum avoir trois items "login/logout", "search", "result".\
* Si l'utilisateur n'est pas authentifié seul l'item "login" est affiché.\
* Si l'utilisateur est authentifié l'item "login" devient "logout" et les items "search" et "result" sont affichés.\

## 6. Sécuriser une route

Ressources :
* [can activate guards](https://atom-morgan.github.io/how-to-test-angular-canactivate-guards/)
* [implementing guards](https://dzone.com/articles/implementing-guard-in-angular-5-app)
* [CanActivate API](https://angular.io/api/router/CanActivate)

Créé une classe (représentant un "guard", tu peux utiliser le CLI Angular) qui implémentera l'interface `CanActivate` ainsi que la méthode `canActivate(..)`(n'oublis pas l'annotation `@Injectable()`).\
* La méthode `canActivate` utilisera le service d'authentification pour authorizer/refuser l'accès à une route, selon si l'utilisateur est authentifié ou non.
* Protège ensuite les routes `/search` et `/result` avec le "guard" créer précédemment.\

Test si ton guard fonctionne bien, n'oublis pas de te déconnecter ou de supprimer la variable `isLogin` a l'aide du `Storage Inspetor`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
