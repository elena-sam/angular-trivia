import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TriviaService } from './common/trivia.service';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';

@Injectable()
export class QuestionsResolve implements Resolve<any> {

  constructor(private triviaService: TriviaService, private router: Router, private snackBar: MatSnackBar) { }

  resolve(route: ActivatedRouteSnapshot) {
    // Angular sends Observable
    // if we want to check whether the API returns an empty array or not, we have to create the observable ourselves
    const obs: Observable<any> = new Observable((observer) => { // create observable that takes one parameter (observer)
      this.triviaService.getQuestions(
        route.queryParams.amount,
        route.queryParams['cat'],
        route.queryParams['diff'],
        route.queryParams['type'])
        .subscribe(res => {
          if (res.results.length > 0) { // if array is not empty, send it
            observer.next(res);
          } else { // if array is empty, stay on page Trivia, display a message, and send error()
            this.router.navigate(['/trivia']);
            this.snackBar.open('Aucune question ne correspond à ces critères', 'ok', {duration: 5000});
            observer.error(); // send error
          }
          observer.complete(); // cold observable => add observer.complete() (otherwise it's a hot observable)
        });
    });
    return obs;
  }
}
