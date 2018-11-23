import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  amount: number
  category: number
  difficulty: string
  type: string

  Form = this.fb.group({
    number: [this.amount],
    category: [this.category],
    difficulty: [this.difficulty],
    type: [this.type]

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }


  generateUrl() {
    
    console.log(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}&type=${this.type}`)

  }
}
