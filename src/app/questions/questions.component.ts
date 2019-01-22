import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';

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
  total: number;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.questions = this.route.snapshot.data['questions'].results; // questions comes from app.routing.ts
    this.route
      .queryParams
      .subscribe(params => {
        this.amount = +params['amount'] || 10; // default to '10' if no param provided
      });
    this.rightAnswers = Array(this.amount); // create a table of a given length ('amount')

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
    this.rightAnswers[index] = event;
    if (event) {
      this.total++;
    }
    if (!this.rightAnswers.includes(undefined)) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      width: '500px',
      data: { nbOfQuestions: this.amount, score: this.total }
    });

    dialogRef.afterClosed().subscribe(userWantsNewQuestions => {
      if (userWantsNewQuestions) {
        this.router.navigate(['/trivia']);
      }
    });
  }
}
