import { PersonagensService } from './../../services/personagens.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as fromPersonagensAction from '../../../store/personagens.action';

@Component({
  selector: 'input-busca-personagens',
  templateUrl: './busca-personagens.component.html',
  styleUrls: ['./busca-personagens.component.scss']
})
export class BuscaPersonagensComponent implements OnInit{

  buscaPersonagem = new FormControl('');

  constructor(
    private store: Store
  ){}

  ngOnInit() {
    this.buscaPersonagem.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap( res => {
        if( res && res?.length > 3) {
          this.store.dispatch(fromPersonagensAction.LoadBuscaPersonagens({payload: res}))
        }
        if( res?.length == 0 ) {
          this.store.dispatch(fromPersonagensAction.LoadPersonagens())
        }
      }))
     .subscribe()
  }
}
