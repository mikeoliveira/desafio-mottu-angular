import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';

const getPersonagensFeatureState = createFeatureSelector<IPersonagensData>(
  'personagensData'
)

const getPersonagensFavoritosFeatureState = createFeatureSelector<IPersonagensFavoritosData>(
  'personagesFavoritosData'
)

export const getPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensData) => state
);

export const getListaFavoritosPersonagens = createSelector(
  getPersonagensFavoritosFeatureState,
  (state: IPersonagensFavoritosData) => {
    return state}
)

export const selectPersonagensFavoritos = createSelector(
  getPersonagens,
  getListaFavoritosPersonagens,
  (personagens, favoritos) => {
    // return personagens.map((personagem) => {
    //   ...personagem,
    //   isFavorito: favoritos.includes(persongem.id)
    // })
  }
);
