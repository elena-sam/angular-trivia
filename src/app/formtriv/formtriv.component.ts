import { TrivalService } from './../common/trival.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formtriv',
  templateUrl: './formtriv.component.html',
  styleUrls: ['./formtriv.component.css']
})
export class FormtrivComponent implements OnInit {



  requestForm = this.fb.group({
    numberq: [''],
    categorie: [''],
    dificuly: [''],
    type: [''],
    encoding: [''],
  });

  constructor(private fb: FormBuilder, private service: TrivalService) { }

  ngOnInit() {
  }
  onSubmit() {

    const numberq = this.requestForm.get('numberq').value;
    const categorie = this.requestForm.get('categorie').value;
    const dificuly = this.requestForm.get('dificuly').value;
    const type = this.requestForm.get('type').value;
    console.log(this.service.readAll(numberq, categorie, dificuly, type));
  }

}
