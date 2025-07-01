import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiService } from '../../services/country-api.service';
import * as CountryActions from './countries.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CountriesEffects {
  // constructor(
  //   private actions$: Actions,
  //   private countryService: CountryApiService
  // ) {}

  private actions$ = inject(Actions);
  private countryService = inject(CountryApiService);

  loadCountries$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CountryActions.loadCountries),
    mergeMap(() =>
      this.countryService.getAllCountries().pipe(
        map((countries) => {
          console.log('✅ API returned countries:', countries); // 👈 Add this
          return CountryActions.loadCountriesSuccess({ countries });
        }),
        catchError((error) => {
          console.error('❌ API error:', error); // 👈 Log error
          return of(CountryActions.loadCountriesFailure({ error }));
        })
      )
    )
  )
);
}