import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { countriesReducer } from './app/store/countries/countries.reducer';
import { CountriesEffects } from './app/store/countries/countries.effects';
import { provideHttpClient } from '@angular/common/http';
import { themeReducer } from './app/store/theme/theme.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      countries: countriesReducer,
      theme: themeReducer
    }),
    provideEffects([CountriesEffects])
  ],
});
