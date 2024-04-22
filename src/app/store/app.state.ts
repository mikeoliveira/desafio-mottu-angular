import { ActionReducerMap } from '@ngrx/store';
import { personagensFavoritosReducer, personagensReducer } from './personagens.reducer';
import { PersonagensEffects } from './personagens.effects';
import { IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';

export interface AppState {
  personagensData: IPersonagensData;
  personagesFavoritosData: IPersonagensFavoritosData;
}

export const appReducer: ActionReducerMap<AppState> = {
  personagensData: personagensReducer,
  personagesFavoritosData: personagensFavoritosReducer
}

export const appEffects = [
  PersonagensEffects
]
