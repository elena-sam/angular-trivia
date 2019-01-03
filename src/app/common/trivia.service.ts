import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>('https://opentdb.com/api_category.php');
  }

  getQuestions(amount, cat, diff, type): Observable<any> {
    cat = cat ? `&category=${cat}` : '';
    diff = diff ? `&difficulty=${diff}` : '';
    type = type ? `&type=${type}` : '';

    return this.http.get<any>(`https://opentdb.com/api.php?amount=${amount}${cat}${diff}${type}`);
  }
}
