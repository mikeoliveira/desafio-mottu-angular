import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PersonagensPaginasActions } from './../store/personagens.action';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent {

  contextoPage: string;
  titlePage = '';

  constructor(
    private router: Router,
    private store: Store
  ){
    this.contextoPage = this.router.url;
  }

  ngOnInit(): void {
    this.informaTitulo();

    this.store.dispatch(PersonagensPaginasActions.carregaPersonagens({}))

  }

  informaTitulo(){

    let exibiTitulo : any = {
      '/': 'Início',
      '/favoritos': 'Favoritos'
    }

    this.titlePage = exibiTitulo[this.router.url];

  }
}
