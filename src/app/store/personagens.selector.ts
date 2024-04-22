import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';
import { LocalStorageService } from 'src/core/services/local-storage.service';
import { CryptoService } from 'src/core/services/crypto.service';
import { PersonagensFavoritosPageActions } from './personagens.action';
import { appReducer } from './app.state';

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

const cryptoService = new CryptoService();
const service = new LocalStorageService(cryptoService);

export const getListaFavoritosPersonagens = createSelector(
  getPersonagensFavoritosFeatureState,
  (state: IPersonagensFavoritosData) =>
    {
      if(state.personagensFavoritos.length > 0) {
        service.setItem('listaPersonagensFavoritos', state.personagensFavoritos);
      }
      return state
    }
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
