import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-busca-personagens',
  templateUrl: './busca-personagens.component.html',
  styleUrls: ['./busca-personagens.component.scss']
})
export class BuscaPersonagensComponent implements OnInit{

  buscaPersonagem = new FormControl('');

  ngOnInit() {
    this.buscaPersonagem.valueChanges.subscribe(
      (value) => {
        console.log(value)
      }
    )
  }

}
