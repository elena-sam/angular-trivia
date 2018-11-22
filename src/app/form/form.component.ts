import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { FormControl, FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  questions: any;
  shown: boolean;

  categories = [
    {value: 'any', title: 'Any Category' },
    {value: '9', title: 'General Knowledge' },
    {value: '10', title: 'Entertainment: Books' },
    {value: '11', title: 'Entertainment: Film' },
    {value: '12', title: 'Entertainment: Music' },
    {value: '13', title: 'Entertainment: Musicals & amp; Theatres' },
    {value: '14', title: 'Entertainment: Television' },
    {value: '15', title: 'Entertainment: Video Games' },
    {value: '16', title: 'Entertainment: Board Games' },
    {value: '17', title: 'Science & amp; Nature' },
    {value: '18', title: 'Science: Computers' },
    {value: '19', title: 'Science: Mathematics' },
    {value: '20', title: 'Mythology' },
    {value: '21', title: 'Sports' },
    {value: '22', title: 'Geography' },
    {value: '23', title: 'History' },
    {value: '24', title: 'Politics' },
    {value: '25', title: 'Art' },
    {value: '26', title: 'Celebrities' },
    {value: '27', title: 'Animals' },
    {value: '28', title: 'Vehicles' },
    {value: '29', title: 'Entertainment: Comics' },
    {value: '30', title: 'Science: Gadgets' },
    {value: '31', title: 'Entertainment: Japanese Anime & amp; Manga' },
    {value: '32', title: 'Entertainment: Cartoon & amp; Animations' }
  ];


  difficulties = [
    { value: 'any', level: 'Difficulty' },
    { value: 'easy', level: 'Easy'},
    { value: 'medium', level: 'Medium'},
    { value: 'hard', level: 'Hard'}
  ];


  types = [
    {value: 'any', name: 'Any Type'},
    {value: 'multiple', name: 'Multiple Choice'},
    {value: 'boolean', name: 'True / False'}
  ];

  qForm = this.fb.group({
    num_q: [10],
    categ: [this.categories[0].value],
    difficulty: [this.difficulties[0].value],
    type: [this.types[0].value]
  });

  constructor(private triviaService: TriviaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.shown = false;
  }

  // https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean

  getQuestions(): void {
    let c = this.qForm.get('categ').value;
    let d = this.qForm.get('difficulty').value;
    let t = this.qForm.get('type').value;
    const num = this.qForm.get('num_q').value;
    c = c === 'any' ? '' : `&category=${c}`;
    d = d === 'any' ? '' : `&difficulty=${d}`;
    t = t === 'any' ? '' : `&type=${t}`;
    console.log(`https://opentdb.com/api.php?amount=10${c}${d}${t}`);
    this.triviaService.getQ(`https://opentdb.com/api.php?amount=${num}${c}${d}${t}`)
      .subscribe(res => {
        this.questions = res.results;
        console.log(res.results);
      });
  }
}
