import { Component } from '@angular/core';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from '../../../store/personagens.selector';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.personagens$ = this.store.select(fromPersonagensSelector.getPersonagens);
  }


  errorHandler(error: HttpErrorResponse) {

  }

}
