import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsResolve } from './questions.resolve';

export const appRoutes: Routes = [
  {
    path: 'trivia', component: FormComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'questions', component: QuestionsComponent, resolve: {
      questions: QuestionsResolve
    }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
