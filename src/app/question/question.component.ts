import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  NumberOfQuestion: string;
  SelectCat: string;
  SelectDif: string;
  SelectType: string;
  category: [];
  url: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  send() {
    this.url = `https://opentdb.com/api.php?amount=${this.NumberOfQuestion}&category=${this.SelectCat}&difficulty=${this.SelectDif}&type=${this.SelectType}`;
    console.log(this.url);
  }

  afficher() {
    this.http.get<any>(this.url).subscribe(res => {
      this.category = res.results;
      console.log(res.results);
    });
      console.log(this.category);
  }

}
