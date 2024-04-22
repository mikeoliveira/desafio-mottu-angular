import { LocalStorageService } from './../../../../core/services/local-storage.service';
import { Component, Input, Output } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonagensSelector from '../../../store/personagens.selector';
import { Router } from '@angular/router';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../../interfaces/personagens.interface';
import { PersonagensFavoritosPageActions, PersonagensPageActions } from 'src/app/store/personagens.action';

@Component({
  selector: 'lista-personangens',
  templateUrl: './lista-personangens.component.html',
  styleUrls: ['./lista-personangens.component.scss']
})
export class ListaPersonangensComponent {
  @Input() contexto: string = '/';


  private subscrition: Subscription;
  personagensData$:Observable<IPersonagensData> = this.store.select(fromPersonagensSelector.getPersonagens);

  personagensFavoritosData$:Observable<IPersonagensFavoritosData> = this.store.select(fromPersonagensSelector.getListaFavoritosPersonagens);

  personagensComFavoritoData$:Observable<IPersonagensData> = this.store.select(fromPersonagensSelector.selectPersonagensFavoritos)

  constructor(
    private store: Store,
    private localStorageService:LocalStorageService
  ){
    this.subscrition = Subscription.EMPTY;
  }

  ngOnInit(){
    this.controlaDadosNoLocalStorage();
  }

  ngOnDestroy(){
    this.subscrition.unsubscribe();
  }


  controlaDadosNoLocalStorage(){
    let flagStopLocalstorage = false;
    this.subscrition = this.personagensFavoritosData$.pipe(
     tap((personagensFavoritosData) => {
       if(personagensFavoritosData.personagensFavoritos.length > 0){
         flagStopLocalstorage = true;
       }else{
         flagStopLocalstorage = false
       }
     }
     )
   ).subscribe();

   let personagensFavoritosLocalstorage:IPersonagens[] = this.localStorageService.getItem('listaPersonagensFavoritos') as IPersonagens[];
   if(personagensFavoritosLocalstorage && !flagStopLocalstorage) {
     personagensFavoritosLocalstorage.forEach((element:IPersonagens) => {
       this.store.dispatch(PersonagensFavoritosPageActions.addPersonagensFavoritos({payload : element}))
     });
   }
  }

  validaUltimoPersonagemNoLocalStorage(value: IPersonagens){
    this.subscrition = this.personagensFavoritosData$.pipe(
      tap((personagensFavoritosData) => {
        if(personagensFavoritosData.personagensFavoritos.length < 1){
          this.localStorageService.removeItem('listaPersonagensFavoritos')
        }
      }
      )
    ).subscribe();
  }
}
