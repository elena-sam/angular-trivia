import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: any;
  @Output() result: EventEmitter<boolean> = new EventEmitter();

  choices: string[] = [];
  answered = false;
  optionSelected: string;
  answerIsShown: boolean;

  constructor() { }

  ngOnInit() {
    this.choices.push(this.question.correct_answer);
    if (this.question.type === 'multiple') {
      for (const incorrect of this.question.incorrect_answers) {
      this.choices.push(incorrect);
      }
    } else {
      this.choices.push(this.question.incorrect_answers);
    }
    this.shuffle(this.choices);
  }

  shuffle(array): void {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }

  submitAnswer(selectedOption): void {
    this.answered = true;
    this.answerIsShown = false;
    this.optionSelected = selectedOption;
    if (selectedOption === this.question.correct_answer) {
      this.result.emit(true);
    } else {
      this.result.emit(false);
    }
  }
}
