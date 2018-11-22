import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrivalService {

  constructor(private http: HttpClient) {}
  readAll(numberq: any, categorie: any, dificuly: any, type: any) {
    return `https://opentdb.com/api.php?amount=${numberq}&category=${categorie}&difficulty=${dificuly}&type=${type}`;
    // return this.http.get<any>(`https://opentdb.com/api.php?amount=${numberq}&category=${categorie}&difficulty=${dificuly}&type=${type}`);
  }
  readByUrl(url: any): Observable<any> {

    return this.http.get<any>(`${url}`);
  }
}
