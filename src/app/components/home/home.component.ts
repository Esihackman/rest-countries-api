import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries } from '../../store/countries/countries.actions';
import {
  selectCountries,
  selectLoading,
  selectFilteredCountries,
} from '../../store/countries/countries.selector';
import { selectTheme } from '../../store/theme/theme.selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, CountryCardComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  themeToggle$!: Observable<boolean>;
  private store = inject(Store);

  constructor() {
    this.themeToggle$ = this.store.select(selectTheme);
    this.themeToggle$.subscribe((isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    });
  }

  countries$ = this.store.select(selectFilteredCountries);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(loadCountries());
  }
}
