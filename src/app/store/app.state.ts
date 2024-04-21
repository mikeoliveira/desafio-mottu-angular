import { ActionReducerMap } from '@ngrx/store';
import { IPersonagensState, personagensReducer } from './personagens.reducer';
import { PersonagensEffects } from './personagens.effects';

export interface AppState {
  personagensService: IPersonagensState;
}

export const appReducer: ActionReducerMap<AppState> = {
  personagensService: personagensReducer
}

export const appEffects = [
  PersonagensEffects
]
