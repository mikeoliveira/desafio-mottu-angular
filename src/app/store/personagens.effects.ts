import { PersonagensService } from './../personagens/services/personagens.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPersonagensAction from './personagens.action';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class PersonagensEffects {
  constructor(
    private action$: Actions,
    private personagensService: PersonagensService
  ) {}

  LoadPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromPersonagensAction.PersonagensTypeAction.LOAD_PERSONAGENS),
      exhaustMap(() =>
        this.personagensService.lista().pipe(
          map(
            (payload) =>
              fromPersonagensAction.LoadPersonagensSucesso({ payload }),
          ),
          catchError((error) =>
            of(fromPersonagensAction.LoadPersonagensFalha({ error }))
          )
        )
      )
    )
  );

  LoadBuscaPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(
        fromPersonagensAction.PersonagensTypeAction.LOAD_BUSCA_PERSONAGENS
      ),
      exhaustMap((param: string) =>
        this.personagensService.busca(param).pipe(
          map(
            (payload) =>
              fromPersonagensAction.LoadBuscaPersonagensSucesso({ payload }),
          ),
          catchError((error) =>
            of(fromPersonagensAction.LoadBuscaPersonagensFalha({ error }))
          )
        )
      )
    )
  );
}
