import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './pages/country-details/country-detail.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'country/:id',
    component: CountryDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
