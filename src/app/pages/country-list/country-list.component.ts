import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Country } from '../../models/country.model';
import { loadCountries } from '../../store/countries/countries.actions';
import { selectAllCountries, selectLoading } from '../../store/countries/countries.selectors';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries$: Observable<Country[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.countries$ = this.store.select(selectAllCountries);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }
}
