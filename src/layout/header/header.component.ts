import { getListaFavoritosPersonagens } from './../../app/store/personagens.selector';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import * as fromPersonagensSelector from '../../app/store/personagens.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  // count = this.store.select(fromPersonagensSelector.getListaFavoritosPersonagens);

  constructor(private store:Store) {

  }

  ngOnInit():void {
    // console.log(this.count);
  }


}
