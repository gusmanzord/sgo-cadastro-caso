import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-tag',
  templateUrl: './cadastro-tag.component.html',
  styleUrls: ['./cadastro-tag.component.css']
})
export class CadastroTagComponent implements OnInit {

  onFileSelected(event){
    console.log(event);
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
