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
  (state: IPersonagensFavoritosData) =>  state
)

export const selectPersonagensFavoritos = createSelector(
  getPersonagens,
  getListaFavoritosPersonagens,
  ({ personagens, countPage, nextPage, previosPage, error }, { personagensFavoritos }) => {
    const personagensComFavoritos = personagens.map((personagem: IPersonagens) => {
      const isFavorito = personagensFavoritos.some(favorito => favorito.id === personagem.id)
      return personagem = {
        ...personagem,
        isFavorito: isFavorito
      }
    })
    return {
      personagens: personagensComFavoritos,
      countPage,
      nextPage,
      previosPage,
      error,
    }
  }
);
