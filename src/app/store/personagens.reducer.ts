import { PersonagensService } from './../personagens/services/personagens.service';
import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagens, Result } from '../personagens/interfaces/personagens.interface';
import * as fromPersonagensAction from './personagens.action';

export interface IPersonagensState {
  personagensFavoritos: Result[],
  personagens: Result[],
  error: string | '';
}

export const initialState: IPersonagensState = {
  personagensFavoritos: [],
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
    ...initialState,
    error: error
  })),
  on(fromPersonagensAction.LoadBuscaPersonagensSucesso,(state, {payload}) => ({
    ...state,
    personagensService: payload,
    personagens: payload.results,
    error: ''
  })),
  on(fromPersonagensAction.LoadBuscaPersonagensFalha, (state, { error }) => ({
    ...initialState,
    error: error
  })),
  on(fromPersonagensAction.AddFavoritoPersonagens, (state, { payload }) => ({
    ...state,
    personagensFavoritos: state.personagensFavoritos.concat(payload)
  })),
  on(fromPersonagensAction.ListaFavoritoPersonagens, (state) => ({
  ...state
  })),
  on(fromPersonagensAction.RemoveFavoritoPersonagens, (state, { payload}) => ({
    ...state,
    personagensFavoritos: state.personagensFavoritos.filter( (personagem) => personagem.id !== payload.id )
  }))
);


export function personagensReducer(state = initialState, action: Action){
  return _personangesReducer(state, action);
}
