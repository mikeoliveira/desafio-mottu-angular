import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum PersonagensTypeAction {
  LISTA_FAVORITO_PERSONAGENS = '[LISTA_FAVORITO_PERSONAGENS]',
  LISTA_FAVORITO_PERSONAGENS_SUCESSO = '[LISTA_FAVORITO_PERSONAGENS]',
  LISTA_FAVORITO_PERSONAGENS_FALHA = '[LISTA_FAVORITO_PERSONAGENS_FALHA]',

  ADD_FAVORITO_PERSONAGENS = '[ADD_FAVORITO_PERSONAGENS]',
  ADD_FAVORITO_PERSONAGENS_SUCESSO = '[ADD_FAVORITO_PERSONAGENS_SUCESSO]',
  ADD_FAVORITO_PERSONAGENS_FALHA = '[ADD_FAVORITO_PERSONAGENS_FALHA]',

  REMOVE_FAVORITO_PERSONAGENS ='[REMOVE_FAVORITO_PERSONAGENS]',
  REMOVE_FAVORITO_PERSONAGENS_SUCESSO ='[REMOVE_FAVORITO_PERSONAGENS_SUCESSO]',
  REMOVE_FAVORITO_PERSONAGENS_FALHA ='[REMOVE_FAVORITO_PERSONAGENS_FALHA]'
}

export const PersonagensPageActions = createActionGroup({
  source: 'Personagens Page',
  events: {
    'Load Personagens': props<{ params?: string }>(),
    'Load Personagens Sucesso': props<{ payload: IPersonagensData }>(),
    'Load Personagens Falha': props<{ error: HttpErrorResponse }>(),
  }
})

export const PersonagensFavoritosPageActions = createActionGroup({
  source: 'Personanges Favoritos Page',
  events: {
    'Load Personagens Favoritos': emptyProps(),
    'Load Personagens Favoritos Sucesso': props<{ payload: IPersonagensFavoritosData }>(),
    'Load Personagens Favoritos Falha': props<{ error:HttpErrorResponse }>(),
    'Add Personagens Favoritos': props<{ payload: IPersonagens }>(),
    'Add Personagens Favoritos Sucesso': props<{ payload: IPersonagens }>(),
    'Add Personagens Favoritos Falha': props<{ error: HttpErrorResponse }>(),
  }
})

// export const ListaFavoritoPersonagens = createAction(
//   PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS,
// );

// export const ListaFavoritoPersonagensSucesso = createAction(
//   PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS_SUCESSO,
//   props<{ payload: IPersonagens}>()
// );

// export const ListaFavoritoPersonagensFalha = createAction(
//   PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS_FALHA,
//   props<{ error: string}>()
// );


// export const AddFavoritoPersonagens = createAction(
//   PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS,
//   props<{payload : IPersonagens }>()
// );

// export const AddFavoritoPersonagensSucesso = createAction(
//   PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS_SUCESSO,
//   props<{ payload: IPersonagens}>()
// );

// export const AddFavoritoPersonagensFalha = createAction(
//   PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS_FALHA,
//   props<{ error: string}>()
// );

// export const RemoveFavoritoPersonagens = createAction(
//   PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS,
//   props<{ payload: IPersonagens }>()
// );

// export const RemoveFavoritoPersonagensSucesso = createAction(
//   PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS_SUCESSO,
//   props<{ payload: IPersonagens}>()
// );

// export const RemoveFavoritoPersonagensFalha = createAction(
//   PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS_FALHA,
//   props<{ error: string}>()
// );







