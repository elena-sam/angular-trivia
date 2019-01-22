import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getStatus: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  logIn(username: string, pwd: string): Observable<boolean> {
    if (username === 'admin' && pwd === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.getStatus.emit(true);
      return of(true);
    }

    sessionStorage.setItem('isLoggedIn', 'false');
    return of(false);
  }

  logOut(): Observable<any> {
    sessionStorage.removeItem('isLoggedIn');
    console.log('status');
    this.getStatus.emit(false);
    return of(false);
  }

  checkLogStatus(): Observable<boolean> {
    const isLogged = sessionStorage.getItem('isLoggedIn');
    if (isLogged) {
      return of(true);
    }
    return of(false);
  }
}
