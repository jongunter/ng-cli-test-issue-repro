

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as testActions from '../reducers/counter.reducer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class TestEffects {

  @Effect()
  testEffect$ = this.actions$
    .ofType(testActions.INCREMENT)
    .do(action => console.log('side effect for increment called'))
    .mapTo({
      type: 'EFFECT_RUN_SUCCESFULLY',
      payload: null
    });

  constructor(private actions$ : Actions) {}
}
