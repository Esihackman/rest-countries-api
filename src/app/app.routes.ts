import { Routes } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/country-list/country-list.component').then(
        (m) => m.CountryListComponent
      ),
  },
  {
    path: 'country/:name',
    loadComponent: () =>
      import('./pages/country-detail/country-detail.component').then(
        (m) => m.CountryDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

