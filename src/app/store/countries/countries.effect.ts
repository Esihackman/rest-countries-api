import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from '../../services/country.service';
import { catchError, map, switchMap, mergeMap } from 'rxjs';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountry,
  loadCountrySuccess,
} from './countries.actions';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../models/country';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountryService);
  private route = inject(ActivatedRoute);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      switchMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );

  loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountry),
      mergeMap((action) =>
        this.countryService.getCountryByCode(action.id).pipe(
          map((country) => {
            // console.log(country);
            return loadCountrySuccess({ country: country[0] });
          }),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );
}
