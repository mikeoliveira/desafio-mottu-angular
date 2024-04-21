import { PersonagensService } from './../personagens/services/personagens.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { PersonagensPageActions } from './personagens.action';

@Injectable()
export class PersonagensEffects {
  constructor(
    private action$: Actions,
    private personagensService: PersonagensService
  ) {}

  LoadPersonagens$ = createEffect(() =>
    this.action$.pipe(
      ofType(PersonagensPageActions.loadPersonagens),
      exhaustMap(() =>
        this.personagensService.lista().pipe(
          map(
            (payload) =>
              PersonagensPageActions.loadPersonagensSucesso({ payload }),
          ),
          catchError((error) =>
            of(PersonagensPageActions.loadPersonagensFalha({ error }))
          )
        )
      )
    )
  );

  // LoadBuscaPersonagens$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(
  //       fromPersonagensAction.PersonagensTypeAction.LOAD_BUSCA_PERSONAGENS
  //     ),
  //     exhaustMap((param: string) =>
  //       this.personagensService.busca(param).pipe(
  //         map(
  //           (payload) =>
  //             fromPersonagensAction.LoadBuscaPersonagensSucesso({ payload }),
  //         ),
  //         catchError((error) =>
  //           of(fromPersonagensAction.LoadBuscaPersonagensFalha({ error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
