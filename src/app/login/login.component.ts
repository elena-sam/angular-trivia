import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../common/login.service';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username: string;
   password: string;


  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() {
  }

  connectMe() {
    if (this.username === 'myName' && this.password === 'myPassword') {
    this.service.login();
     } else {
       alert('Erreur dans les identifiants');
       sessionStorage.setItem('currentUser', JSON.stringify({ token: Token, isLogin: false }));
     }
  }

}
