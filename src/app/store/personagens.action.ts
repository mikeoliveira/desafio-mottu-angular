import { createAction, props } from '@ngrx/store';
import { IPersonagens } from '../personagens/interfaces/personagens.interface';

export enum PersonagensTypeAction {
  LOAD_PERSONAGENS = '[LOAD_PERSONAGENS]',
  LOAD_PERSONAGENS_SUCESSO = '[LOAD_PERSONAGENS_SUCESSO]',
  LOAD_PERSONAGENS_FALHA = '[LOAD_PERSONAGENS_FALHA]',

  LOAD_BUSCA_PERSONAGENS = '[LOAD_BUSCA_PERSONAGENS]',
  LOAD_BUSCA_PERSONAGENS_SUCESSO = '[LOAD_BUSCA_PERSONAGENS_SUCESSO]',
  LOAD_BUSCA_PERSONAGENS_FALHA = '[LOAD_BUSCA_PERSONAGENS_FALHA]',
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
