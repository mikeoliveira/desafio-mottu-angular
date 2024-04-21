import { IPersonagensState } from './../../../store/personagens.reducer';
import { IPersonagens, Result } from './../../interfaces/personagens.interface';
import { Component } from '@angular/core';
import { PersonagensService } from '../../services/personagens.service';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from '../../../store/personagens.selector';

@Component({
  selector: 'lista-personangens',
  templateUrl: './lista-personangens.component.html',
  styleUrls: ['./lista-personangens.component.scss']
})
export class ListaPersonangensComponent {
  personagens$?:Observable<any>;

  constructor(
    private store: Store
  ){ }

  ngOnInit(): void {
    this.personagens$ = this.store.select(fromPersonagensSelector.getPersonagens).pipe(
      map(
        (payload: IPersonagensState) => payload.personagens
      )
    );
  }
}
