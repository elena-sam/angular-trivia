import { Injectable, Input } from '@angular/core';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


  constructor(private router: Router) { }

  login() {
    sessionStorage.setItem('currentUser', JSON.stringify({ token: Token, isLogin: true }));
    this.router.navigate(['question']);
  }

  logout() {
    sessionStorage.setItem('currentUser', JSON.stringify({ token: Token, isLogin: false }));
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
