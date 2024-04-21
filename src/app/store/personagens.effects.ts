import { PersonagensService } from './../personagens/services/personagens.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPersonagensActions from './personagens.action';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class PersonagensEffects {
  constructor(private action$: Actions, private personagensService:PersonagensService){}

  LoadPersonagens$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(fromPersonagensActions.PersonagensTypeAction.LOAD_PERSONAGENS),
        exhaustMap(() => this.personagensService.list()
        .pipe(
          tap( res => console.log( 'teste', res )),
          map(payload =>
            fromPersonagensActions.LoadPersonagensSucesso({ payload }),
            catchError(error => of(fromPersonagensActions.LoadPersonagensFalha({ error})))
          )
        )
      )
      )
  )
}
