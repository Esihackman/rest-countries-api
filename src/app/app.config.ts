import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { countryReducer } from './store/countries/countries.reducer';
// Update the import path to match the actual file name, e.g., 'countries.effects' if that's correct
import { CountryEffects } from './store/countries/countries.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { themeReducer } from './store/theme/theme.reducer';
import { UserReducer } from './store/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects([CountryEffects]),
    provideStore({
      countries: countryReducer,
      theme: themeReducer,
      user: UserReducer,
    }),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
