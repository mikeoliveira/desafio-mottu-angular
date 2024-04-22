import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';
import { PersonagensFavoritosPageActions, PersonagensPageActions } from './personagens.action';
import { HttpErrorResponse } from '@angular/common/http';


export const initialState: IPersonagensData = {
  personagens: [],
  countPage: 0,
  nextPage: '',
  previosPage: '',
  error: {} as HttpErrorResponse
}


const _personangesReducer = createReducer(
  initialState,
  on(PersonagensPageActions.loadPersonagensSucesso,(state, { payload }) => ({
    ...state,
    personagens: payload.personagens,
    countPage: payload.countPage,
    nextPage: payload.nextPage,
    previosPage: payload.previosPage,
    error: {} as HttpErrorResponse
  })),
  on(PersonagensPageActions.loadPersonagensFalha, (state,  error  ) => ({
    ...initialState,
    error: error
  }))
);

export function personagensReducer(state = initialState, action: Action){
  return _personangesReducer(state, action);
}



export const initialStateFavoritos: IPersonagensFavoritosData = {
  personagensFavoritos: [],
  countPage: 0,
  nextPage: '',
  previosPage: '',
  error: {} as HttpErrorResponse
}

const _personangesFavoritosReducer = createReducer(
  initialStateFavoritos,
  on(PersonagensFavoritosPageActions.loadPersonagensFavoritos,(state) => ({
    ...state,
    error: {} as HttpErrorResponse
  })),
  on(PersonagensFavoritosPageActions.loadPersonagensFavoritosFalha, (state, error ) => ({
    ...initialStateFavoritos,
    error: error
  })),
  on(PersonagensFavoritosPageActions.addPersonagensFavoritos, (state, { payload }) => ({
    ...state,
    personagensFavoritos: state.personagensFavoritos.concat(payload),
  })),
  // on(fromPersonagensAction.ListaFavoritoPersonagens, (state) => ({
  // ...state
  // })),
  // on(fromPersonagensAction.RemoveFavoritoPersonagens, (state, { payload }) => ({
  //   ...state,
  //   data: state.data.filter( (personagem) => personagem.id !== payload.id ),
  // }))
);

export function personagensFavoritosReducer(state = initialStateFavoritos, action: Action){
  return _personangesFavoritosReducer(state, action);
}
