import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagensState } from './personagens.reducer';
import { Result } from '../personagens/interfaces/personagens.interface';


const getPersonagensFeatureState = createFeatureSelector<IPersonagensState>(
  'personagensService'
)

export const getPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensState) => state
);

export const getListaFavoritosPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensState) => {
    return state.personagensFavoritos}
)
