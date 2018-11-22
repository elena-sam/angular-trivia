import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

	api = new FormControl('');
	quest:string;
	categories:string;
	dif:string;
	type:string;

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	geturl(){
		console.log(`https://opentdb.com/api.php?amount=${this.quest}&category=${this.categories}&difficulty=${this.dif}&type=${this.type}`)
	}
}
