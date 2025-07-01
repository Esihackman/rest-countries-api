import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiService } from '../../services/countries-api.service';
import * as CountryActions from './countries.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryApiService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryService.getAllCountries().pipe(
          map((countries) =>
            CountryActions.loadCountriesSuccess({ countries })
          ),
          catchError((error) =>
            of(CountryActions.loadCountriesFailure({ error }))
          )
        )
      )
    )
  );
}
