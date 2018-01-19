import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-criar-caso',
  templateUrl: './criar-caso.component.html',
  styleUrls: ['./criar-caso.component.css']
})
export class CriarCasoComponent implements OnInit {
  selectedValueAssignment: string ;
  selectedValueTheme: string ;


  assignment = new FormControl();
  theme = new FormControl();

  assignmentList = ['atribuicao_1', 'atribuicao_2', 'atribuicao_3', 'atribuicao_3', 'atribuicao_3', 'atribuicao_3'];
  themeList = ['tema_1', 'tema_2', 'tema_3', 'tema_4', 'tema_5', 'tema_6'];

  constructor() { }

  ngOnInit() {
  }

}
