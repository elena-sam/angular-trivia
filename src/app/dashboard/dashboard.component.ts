import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questionForm = this.fb.group({
    number: ['3', Validators.required],
    categorie: ['4'],
    difficulte: ['easy'],
    type: ['multiple']
  });

  question: any;
  answer: boolean
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.answer = false;
  }

  getQuestion() {
    // tslint:disable-next-line:max-line-length
    const url = `https://opentdb.com/api.php?amount=${this.questionForm.value.number}&categorie=${this.questionForm.value.categorie}&type=${this.questionForm.value.type}&difficulty=${this.questionForm.value.difficulte}`;

    this.http.get(url).subscribe(res => {
      this.question = res['results'];
      console.log(this.question);
    });

    console.log(url);
  }

  getAnswer() {
    this.answer = !this.answer;
  }

  reload() {
    window.location.reload();
  }

}
