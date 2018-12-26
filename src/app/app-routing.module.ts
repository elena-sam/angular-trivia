import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const Approutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'question', component: DashboardComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(Approutes)
  ]
})
export class AppRoutingModule { }
