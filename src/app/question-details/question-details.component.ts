import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: any;
  answer: boolean;
  result: any;

  constructor() { }

  ngOnInit() {
  }

  getAnswer() {
    this.answer = !this.answer;
  }

}
