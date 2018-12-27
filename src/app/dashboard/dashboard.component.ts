import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../common/api.service';
import { Question } from './../common/api.model';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questionForm = this.fb.group({
    number: ['3', Validators.required],
    categorie: [''],
    difficulte: [''],
    type: ['']
  });

  question: Question[];
  categorie: any;
  answer: boolean;
  constructor(private fb: FormBuilder, private http: HttpClient, private service: ApiService, private login: LoginService) { }

  ngOnInit() {
    this.answer = false;

    this.http.get(' https://opentdb.com/api_category.php').subscribe(res => {
      this.categorie = res['trivia_categories'];
      console.log(this.categorie);
    });
  }

  getQuestion() {
    // tslint:disable-next-line:max-line-length
    const url = `https://opentdb.com/api.php?amount=${this.questionForm.value.number}&categorie=${this.questionForm.value.categorie}&type=${this.questionForm.value.type}&difficulty=${this.questionForm.value.difficulte}`;

    this.service.search(url).subscribe(res => {
      this.question = res['results'];
    });
  }

  reload() {
    window.location.reload();
  }

  logout() {
    this.login.logout();
  }

}
