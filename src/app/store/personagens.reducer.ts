import { PersonagensService } from './../personagens/services/personagens.service';
import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagens, Result } from '../personagens/interfaces/personagens.interface';
import * as fromPersonagensAction from './personagens.action';

export interface IPersonagensState {
  personagensFavoritos: IPersonagens,
  personagens: Result[],
  error: string | '';
}

export const initialState: IPersonagensState = {
  personagensFavoritos: {} as IPersonagens,
  personagens: [],
  error: ''
}

const _personangesReducer = createReducer(
  initialState,
  on(fromPersonagensAction.LoadPersonagensSucesso,(state, { payload }) => ({
    ...state,
    personagensService: payload,
    personagens: payload.results,
    error: ''
  })),
  on(fromPersonagensAction.LoadPersonagensFalha, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(fromPersonagensAction.LoadBuscaPersonagensSucesso,(state, {payload}) => ({
    ...state,
    personagensService: payload,
    personagens: payload.results,
    error: ''
  })),
  on(fromPersonagensAction.LoadBuscaPersonagensFalha, (state, { error }) => ({
    ...state,
    error: error
  })),
);


export function personagensReducer(state = initialState, action: Action){
  return _personangesReducer(state, action);
}
