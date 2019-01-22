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
  rightAnswers: boolean[];
  wrongAnswers: boolean[];
  total: number;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.questions = this.route.snapshot.data['questions'].results; // questions comes from app.routing.ts
    this.route
      .queryParams
      .subscribe(params => {
        this.amount = +params['amount'] || 10; // default to '10' if no param provided
      });
    this.rightAnswers = Array(this.amount); // create a table of a given length ('amount')
    this.wrongAnswers = Array(this.amount); // create a table of a given length ('amount')

    this.onResize(window.innerWidth);
    this.total = 0;
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

  checkAnswer(event, index) {
    console.log('event', event);
    console.log('right', this.rightAnswers[index]);
    this.rightAnswers[index] = event;
    if (event) {
      this.total++;
    }
    console.log('right', this.rightAnswers[index]);
  }
}
