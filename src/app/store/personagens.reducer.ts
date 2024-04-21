import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagens, IPersonagensData } from '../personagens/interfaces/personagens.interface';
import * as fromPersonagensAction from './personagens.action';
import { PersonagensPageActions } from './personagens.action';




export const initialState: IPersonagensData = {
  personagens: [],
  countPage: 0,
  nextPage: '',
  previosPage: '',
  error: ''
}

const _personangesReducer = createReducer(
  initialState,
  on(PersonagensPageActions.loadPersonagensSucesso,(state, { payload }) => ({
    ...state,
    personagens: payload.personagens,
    countPage: payload.countPage,
    nextPage: payload.nextPage,
    previosPage: payload.previosPage,
    error: ''
  })),
  on(PersonagensPageActions.loadPersonagensFalha, (state, { error }) => ({
    ...initialState,
    error: error
  })),
  // on(fromPersonagensAction.LoadBuscaPersonagensSucesso,(state, {payload}) => ({
  //   ...state,
  //   personagens: payload,
  //   error: ''
  // })),
  // on(fromPersonagensAction.LoadBuscaPersonagensFalha, (state, { error }) => ({
  //   ...initialState,
  //   error: error
  // })),
  // on(fromPersonagensAction.AddFavoritoPersonagens, (state, { payload }) => ({
  //   ...state,
  //   data: state.data.concat(payload),
  // })),
  // on(fromPersonagensAction.ListaFavoritoPersonagens, (state) => ({
  // ...state
  // })),
  // on(fromPersonagensAction.RemoveFavoritoPersonagens, (state, { payload }) => ({
  //   ...state,
  //   data: state.data.filter( (personagem) => personagem.id !== payload.id ),
  // }))
);

export function personagensReducer(state = initialState, action: Action){
  return _personangesReducer(state, action);
}
