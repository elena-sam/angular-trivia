import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent {

  headerMessage: string;
  score: number;
  nbOfQuestions: number;
  percent: number;

  message = {
    0: 'Dommage, vous ferez mieux la prochaine fois',
    1: 'Encore un petit effort',
    2: 'Bien joué !',
    3: 'Félicitations !!!'
  };

  constructor(public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.score = data.score;
      this.nbOfQuestions = data.nbOfQuestions;
      console.log(data);
      console.log(this.nbOfQuestions);
      console.log(this.nbOfQuestions * 30);
      console.log(this.nbOfQuestions * 30 / 100);
      if (this.score < (this.nbOfQuestions * 30 / 100 )) {
        this.headerMessage = this.message[0];
      } else if (this.score < (this.nbOfQuestions * 50 / 100)) {
        this.headerMessage = this.message[1];
      } else if (this.score < (this.nbOfQuestions * 70 / 100)) {
        this.headerMessage = this.message[2];
    } else {
        this.headerMessage = this.message[3];
    }
    this.percent = Math.ceil(this.score / this.nbOfQuestions * 100);
  }

}
