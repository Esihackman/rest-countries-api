// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { countriesReducer } from './store/countries/countries.reducer';
import { CountriesEffects } from './store/countries/countries.effects';
import { themeReducer } from './store/theme/theme.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    // ✅ Provide NgRx Store
    provideStore({
      countries: countriesReducer,
      theme: themeReducer
    }),

    // ✅ Provide NgRx Effects
    provideEffects([CountriesEffects])
  ]
};
