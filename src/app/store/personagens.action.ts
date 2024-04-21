import { createAction, props } from '@ngrx/store';
import { IPersonagens, Result } from '../personagens/interfaces/personagens.interface';

export enum PersonagensTypeAction {
  LOAD_PERSONAGENS = '[LOAD_PERSONAGENS]',
  LOAD_PERSONAGENS_SUCESSO = '[LOAD_PERSONAGENS_SUCESSO]',
  LOAD_PERSONAGENS_FALHA = '[LOAD_PERSONAGENS_FALHA]',

  LOAD_BUSCA_PERSONAGENS = '[LOAD_BUSCA_PERSONAGENS]',
  LOAD_BUSCA_PERSONAGENS_SUCESSO = '[LOAD_BUSCA_PERSONAGENS_SUCESSO]',
  LOAD_BUSCA_PERSONAGENS_FALHA = '[LOAD_BUSCA_PERSONAGENS_FALHA]',

  NOT_FOUND_PERSONAGENS = '[NOT_FOUND_PERSONAGENS]',

  CLEAR_DATA_PERSONAGENS = '[CLEAR_DATA_PERSONAGENS]',
  CLEAR_DATA_PERSONAGENS_SUCESSO = '[CLEAR_DATA_PERSONAGENS_SUCESSO]',
  CLEAR_DATA_PERSONAGENS_FALHA ='[CLEAR_DATA_PERSONAGENS_FALHA]',

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

export const LoadPersonagens = createAction(
  PersonagensTypeAction.LOAD_PERSONAGENS
);

export const LoadPersonagensSucesso = createAction(
  PersonagensTypeAction.LOAD_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const LoadPersonagensFalha = createAction(
  PersonagensTypeAction.LOAD_PERSONAGENS_FALHA,
  props<{ error: string}>()
);

export const LoadBuscaPersonagens = createAction(
  PersonagensTypeAction.LOAD_BUSCA_PERSONAGENS,
  props<{ payload: string | null }>()
);

export const LoadBuscaPersonagensSucesso = createAction(
  PersonagensTypeAction.LOAD_BUSCA_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const LoadBuscaPersonagensFalha = createAction(
  PersonagensTypeAction.LOAD_BUSCA_PERSONAGENS_FALHA,
  props<{ error: string}>()
);

export const ClearDataPersonagens = createAction(
  PersonagensTypeAction.CLEAR_DATA_PERSONAGENS,
);

export const ClearDataPersonagensSucesso = createAction(
  PersonagensTypeAction.CLEAR_DATA_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const ClearDataPersonagensFalha = createAction(
  PersonagensTypeAction.CLEAR_DATA_PERSONAGENS_FALHA,
  props<{ error: string}>()
);


export const ListaFavoritoPersonagens = createAction(
  PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS,
);

export const ListaFavoritoPersonagensSucesso = createAction(
  PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const ListaFavoritoPersonagensFalha = createAction(
  PersonagensTypeAction.LISTA_FAVORITO_PERSONAGENS_FALHA,
  props<{ error: string}>()
);


export const AddFavoritoPersonagens = createAction(
  PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS,
  props<{payload : Result }>()
);

export const AddFavoritoPersonagensSucesso = createAction(
  PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const AddFavoritoPersonagensFalha = createAction(
  PersonagensTypeAction.ADD_FAVORITO_PERSONAGENS_FALHA,
  props<{ error: string}>()
);

export const RemoveFavoritoPersonagens = createAction(
  PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS,
  props<{ payload: Result }>()
);

export const RemoveFavoritoPersonagensSucesso = createAction(
  PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS_SUCESSO,
  props<{ payload: IPersonagens}>()
);

export const RemoveFavoritoPersonagensFalha = createAction(
  PersonagensTypeAction.REMOVE_FAVORITO_PERSONAGENS_FALHA,
  props<{ error: string}>()
);







