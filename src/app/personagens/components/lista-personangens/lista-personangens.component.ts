import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from '../../../store/personagens.selector';
import { Router } from '@angular/router';
import { IPersonagensData, IPersonagensFavoritosData } from '../../interfaces/personagens.interface';

@Component({
  selector: 'lista-personangens',
  templateUrl: './lista-personangens.component.html',
  styleUrls: ['./lista-personangens.component.scss']
})
export class ListaPersonangensComponent {
  @Input() contexto: string = '/';

  personagensData$:Observable<IPersonagensData> = this.store.select(fromPersonagensSelector.getPersonagens);

  personagensFavoritosData$:Observable<IPersonagensFavoritosData> = this.store.select(fromPersonagensSelector.getListaFavoritosPersonagens);

  constructor(
    private router: Router,
    private store: Store
  ){ }

}
