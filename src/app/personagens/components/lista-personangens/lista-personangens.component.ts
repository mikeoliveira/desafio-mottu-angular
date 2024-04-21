import { Component } from '@angular/core';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from '../../../store/personagens.selector';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IPersonagensData } from '../../interfaces/personagens.interface';

@Component({
  selector: 'lista-personangens',
  templateUrl: './lista-personangens.component.html',
  styleUrls: ['./lista-personangens.component.scss']
})
export class ListaPersonangensComponent {
  personagensData$:Observable<IPersonagensData> = this.store.select(fromPersonagensSelector.getPersonagens);

  constructor(
    private router: Router,
    private store: Store
  ){ }

  ngOnInit(): void {
  }


  errorHandler(error: HttpErrorResponse) {

  }


}
