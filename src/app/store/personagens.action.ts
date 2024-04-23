import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IPersonagens, IPersonagensData, IPersonagensFavoritosData } from '../personagens/interfaces/personagens.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const PersonagensPageActions = createActionGroup({
  source: 'Personagens Page',
  events: {
    'Load Personagens': props<{ params?: string }>(),
    'Load Personagens Sucesso': props<{ payload: IPersonagensData }>(),
    'Load Personagens Falha': props<{ error: HttpErrorResponse }>(),
    'Load Pages Personagens': props<{ params: string }>(),
    'Load Pages Personagens Sucesso': props<{ payload: IPersonagensData }>(),
    'Load Pages Personagens Falha': props<{ error: HttpErrorResponse }>(),
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
    'Remove Personagens Favoritos': props<{ payload: IPersonagens }>(),
    'Remove Personagens Favoritos Sucesso': props<{ payload: IPersonagens }>(),
    'Remove Personagens Favoritos Falha': props<{ error: HttpErrorResponse }>(),
  }
})
