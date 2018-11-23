import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  nbOfQuestions: number;
  category: number;
  difficulty: string;
  type: string;
  urlG: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  generateURL() {
    // tslint:disable-next-line:max-line-length
    this.urlG = `https://opentdb.com/api.php?amount=${this.nbOfQuestions}&category=${this.category}&difficulty=${this.difficulty}&type=${this.type}`;
    console.log(this.urlG);
  }

  alo() {
    this.http.get<any>(this.urlG).subscribe(res => {
      res = res.results;
      console.log(res);
    });
  }

}
