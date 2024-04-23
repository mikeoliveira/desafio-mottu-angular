import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';
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
  })),
  on(PersonagensPageActions.loadPagesPersonagensSucesso,(state, { payload }) => ({
    ...state,
    personagens: payload.personagens,
    countPage: payload.countPage,
    nextPage: payload.nextPage,
    previosPage: payload.previosPage,
    error: {} as HttpErrorResponse
  })),
  on(PersonagensPageActions.loadPagesPersonagensFalha, (state,  error  ) => ({
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
    personagensFavoritos: state.personagensFavoritos.concat(payload)
  })),
  on(PersonagensFavoritosPageActions.removePersonagensFavoritos, (state, { payload }) => ({
    ...state,
    personagensFavoritos: state.personagensFavoritos.filter( (personagem) => personagem.id !== payload.id ),
  }))
);

export function personagensFavoritosReducer(state = initialStateFavoritos, action: Action){
  return _personangesFavoritosReducer(state, action);
}

const validaSeExisteId = (personagens:IPersonagens[], payload: IPersonagens) => {
   if(personagens.some((personagem) => personagem.id == payload.id)){
    return personagens.concat(payload)
   }else {
    return personagens
   }
}
