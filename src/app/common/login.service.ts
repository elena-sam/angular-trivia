import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logIn(username, pwd): Observable<boolean> {
    if (username === 'admin' && pwd === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      return of(true);
    }

    sessionStorage.setItem('isLoggedIn', 'false');
    return of(false);
  }

  logOut(): Observable<any> {
    sessionStorage.removeItem('isLoggedIn');
    return of(false);
  }
}
