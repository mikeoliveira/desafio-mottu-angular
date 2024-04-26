import { LocalStorageService } from 'src/core/services/local-storage.service';
import { PersonagensService } from './../personagens/services/personagens.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { PersonagensPaginasActions } from './personagens.action';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PersonagensEffects {
  constructor(
    private action$: Actions,
    private personagensService: PersonagensService,
  ) {}

  LoadPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(PersonagensPaginasActions.carregaPersonagens),
      switchMap(( params ) =>
        this.personagensService.busca( params).pipe(
          map(
            (payload) =>
              {
                return PersonagensPaginasActions.carregaPersonagensSucesso({ payload })
              }
          ),
          catchError((error: HttpErrorResponse) =>
            of(PersonagensPaginasActions.carregaPersonagensFalha(error))
          )
        )
      )
    )
  );

  LoadPagesPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(PersonagensPaginasActions.carregaPaginasPersonagens),
      switchMap(( params ) =>
        this.personagensService.navigatePages( params).pipe(
          map(
            (payload) =>
              {
                return PersonagensPaginasActions.carregaPaginasPersonagensSucesso({ payload })
              }
          ),
          catchError((error: HttpErrorResponse) =>
            of(PersonagensPaginasActions.carregaPaginasPersonagensFalha(error))
          )
        )
      )
    )
  );
}
