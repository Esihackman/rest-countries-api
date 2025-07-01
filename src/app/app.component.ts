import { Component } from '@angular/core';
import { CountryListComponent } from './pages/country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountryListComponent],
  template: `<app-country-list />`,
})
export class AppComponent {}
