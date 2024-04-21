import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagensState } from './personagens.reducer';


const getPersonagensFeatureState = createFeatureSelector<IPersonagensState>(
  'personagensService'
)

export const getPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensState) => state
);
