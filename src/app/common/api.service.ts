import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  question: any;

  constructor(private http: HttpClient) { }

  search(url): Observable<any> {
    return this.http.get<any>(`${url}`);
  }
}
