import { LocalStorageService } from 'src/core/services/local-storage.service';
import { PersonagensService } from './../personagens/services/personagens.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { PersonagensPageActions } from './personagens.action';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PersonagensEffects {
  constructor(
    private action$: Actions,
    private personagensService: PersonagensService,
  ) {}

  LoadPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(PersonagensPageActions.loadPersonagens),
      switchMap(( params ) =>
        this.personagensService.busca( params).pipe(
          map(
            (payload) =>
              {
                return PersonagensPageActions.loadPersonagensSucesso({ payload })
              }
          ),
          catchError((error: HttpErrorResponse) =>
            of(PersonagensPageActions.loadPersonagensFalha(error))
          )
        )
      )
    )
  );

  LoadPagesPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(PersonagensPageActions.loadPagesPersonagens),
      switchMap(( params ) =>
        this.personagensService.navigatePages( params).pipe(
          map(
            (payload) =>
              {
                return PersonagensPageActions.loadPagesPersonagensSucesso({ payload })
              }
          ),
          catchError((error: HttpErrorResponse) =>
            of(PersonagensPageActions.loadPagesPersonagensFalha(error))
          )
        )
      )
    )
  );
}
