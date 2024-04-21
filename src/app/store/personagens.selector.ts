import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagensData } from '../personagens/interfaces/personagens.interface';

const getPersonagensFeatureState = createFeatureSelector<IPersonagensData>(
  'personagensData'
)

export const getPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensData) => state
);

export const getListaFavoritosPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensData) => {
    return state}
)
