import { ActionReducerMap } from '@ngrx/store';
import { personagensReducer } from './personagens.reducer';
import { PersonagensEffects } from './personagens.effects';
import { IPersonagensData } from '../personagens/interfaces/personagens.interface';

export interface AppState {
  personagensData: IPersonagensData;
}

export const appReducer: ActionReducerMap<AppState> = {
  personagensData: personagensReducer
}

export const appEffects = [
  PersonagensEffects
]
