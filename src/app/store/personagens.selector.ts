import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';

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
    const newListPersonagens: IPersonagens[] = [];
    personagens.personagens.map((personagem:IPersonagens) => {
      personagem = {
        ...personagem,
        isFavorito: favoritos.personagensFavoritos.includes(personagem)
      }
      newListPersonagens.push(personagem)
    })
    return newListPersonagens;
  }
);
