import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../common/trivia.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any;
  amount: number;
  breakpoint: number;
  questionSide: boolean[];

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.questions = this.route.snapshot.data['questions'].results; // questions comes from app.routing.ts
    this.route
      .queryParams
      .subscribe(params => {
        this.amount = +params['amount'] || 10; // default to '10' if no param provided
      });
    this.questionSide = Array(this.amount).fill(true); // create a table of a given length ('amount'), and fill it with 'true'

    this.onResize(window.innerWidth);
  }

  onResize(event): void {
    if (event.target) {
      event = event.target.innerWidth;
    }
    if (event <= 400) {
      this.breakpoint = 1;
    } else if (event <= 800) {
      this.breakpoint = 2;
    } else if (event <= 1000) {
      this.breakpoint = 3;
    } else {
      this.breakpoint = 4;
    }
  }

}
