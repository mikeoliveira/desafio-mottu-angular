import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IPersonagens, IPersonagensDados, IPersonagensFavoritosDados } from '../personagens/interfaces/personagens.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const PersonagensPaginasActions = createActionGroup({
  source: 'Personagens Pagina',
  events: {
    'Carrega Personagens': props<{ params?: string }>(),
    'Carrega Personagens Sucesso': props<{ payload: IPersonagensDados }>(),
    'Carrega Personagens Falha': props<{ error: HttpErrorResponse }>(),
    'Carrega Paginas Personagens': props<{ params: string }>(),
    'Carrega Paginas Personagens Sucesso': props<{ payload: IPersonagensDados }>(),
    'Carrega Paginas Personagens Falha': props<{ error: HttpErrorResponse }>(),
  }
})

export const PersonagensFavoritosPageActions = createActionGroup({
  source: 'Personanges Favoritos Page',
  events: {
    'Carrega Personagens Favoritos': emptyProps(),
    'Carrega Personagens Favoritos Sucesso': props<{ payload: IPersonagensFavoritosDados }>(),
    'Carrega Personagens Favoritos Falha': props<{ error:HttpErrorResponse }>(),
    'Adiciona Personagens Favoritos': props<{ payload: IPersonagens }>(),
    'Adiciona Personagens Favoritos Sucesso': props<{ payload: IPersonagens }>(),
    'Adiciona Personagens Favoritos Falha': props<{ error: HttpErrorResponse }>(),
    'Remove Personagens Favoritos': props<{ payload: IPersonagens }>(),
    'Remove Personagens Favoritos Sucesso': props<{ payload: IPersonagens }>(),
    'Remove Personagens Favoritos Falha': props<{ error: HttpErrorResponse }>(),
  }
})
