import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: any;
  answer: boolean;
  result: any;

  constructor(private http: HttpClient, private service: ApiService) { }

  ngOnInit() {
  }

  getAnswer() {
    this.answer = !this.answer;
  }

}
