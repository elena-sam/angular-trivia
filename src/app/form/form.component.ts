import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TriviaService } from '../common/trivia.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  breakpoint: number;

  triviaForm: FormGroup;
  questionSide: boolean[];
  difficulties = [
    {id: 'easy',
    name: 'facile'},
    {id: 'medium',
    name: 'moyen'},
    {id: 'hard',
    name: 'difficile'}
  ];
  types = [
    {id: 'mutiple',
    name: 'Choix multiple'},
    {id: 'boolean',
    name: 'Vrai/Faux'}
  ];
  categories: any[];
  questions: any;

  constructor(
      private fb: FormBuilder,
      private service: TriviaService
    ) {
    this.triviaForm = this.fb.group({
      amount: ['10', Validators.compose([Validators.min(3), Validators.required])],
      category: [''],
      difficulty: [''],
      type: [''],
    });
  }

  ngOnInit() {
    this.service.getCategories().subscribe(res => {
      this.categories = res.trivia_categories;
    });

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

  onSubmit(): void {
    const amount = this.triviaForm.get('amount').value;
    const cat = this.triviaForm.get('category').value;
    const diff = this.triviaForm.get('difficulty').value;
    const type = this.triviaForm.get('type').value;


    this.service.getQuestions(amount, cat, diff, type).subscribe(res => {
      this.questions = res.results;
    });

    this.questionSide = Array(+amount).fill(true); // create a table of a given length ('amount'), and fill it with 'true'
  }
}
