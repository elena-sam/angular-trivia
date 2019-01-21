import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuestionDetailsComponent } from './form/question-details/question-details.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routing';
import { QuestionsResolve } from './questions.resolve';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuestionDetailsComponent,
    LoginComponent,
    QuestionsComponent,
  ],
  imports: [RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    QuestionsResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
