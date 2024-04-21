import { Action, createReducer, on } from '@ngrx/store';
import { IPersonagens, Result } from '../personagens/interfaces/personagens.interface';
import * as fromPersonagensActions from './personagens.action';

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
  on(fromPersonagensActions.LoadPersonagensSucesso,(state, { payload }) => ({
    ...state,
    personagensService: payload,
    personagens: payload.results
  }))
);


export function personagensReducer(state = initialState, action: Action){
  return _personangesReducer(state, action);
}
