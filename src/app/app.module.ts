import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuestionDetailsComponent } from './form/question-details/question-details.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routing';
import { QuestionsResolve } from './questions.resolve';
import { QuestionsComponent } from './questions/questions.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrueFalsePipe } from './true-false.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuestionDetailsComponent,
    LoginComponent,
    QuestionsComponent,
    MainNavComponent,
    TrueFalsePipe,
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
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  providers: [
    QuestionsResolve,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, horizontalPosition: 'right' } },
    TrueFalsePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
