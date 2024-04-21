import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from './../store/personagens.selector';
import * as fromPersonagensAction from './../store/personagens.action';
import { PersonagensPageActions } from './../store/personagens.action';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent {
  titlePage = '';

  constructor(
    private router: Router,
    private store: Store
  ){

  }

  ngOnInit(): void {
    this.informaTitulo();

    this.store.dispatch(PersonagensPageActions.loadPersonagens())
  }

  informaTitulo(){
    switch (this.router.url) {
      case '/':
        this.titlePage = 'Início';
        break;
      case '/favoritos':
        this.titlePage = 'Favoritos';
        break;
      default:
        break;
    }
  }
}
