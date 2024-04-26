import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonagens, IPersonagensDados, IPersonagensFavoritosDados } from '../personagens/interfaces/personagens.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CryptoService } from 'src/app/core/services/crypto.service';

const getPersonagensFeatureState = createFeatureSelector<IPersonagensDados>(
  'personagensData'
)

const getPersonagensFavoritosFeatureState = createFeatureSelector<IPersonagensFavoritosDados>(
  'personagesFavoritosData'
)

export const getPersonagens = createSelector(
  getPersonagensFeatureState,
  (state: IPersonagensDados) => state
);

const cryptoService = new CryptoService();
const service = new LocalStorageService(cryptoService);

export const getListaFavoritosPersonagens = createSelector(
  getPersonagensFavoritosFeatureState,
  (state: IPersonagensFavoritosDados) =>
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
