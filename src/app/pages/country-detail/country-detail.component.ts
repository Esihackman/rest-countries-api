import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, take } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { Country } from '../../models/country.model';
import { AppState } from '../../store/app.state';
import { selectAllCountries } from '../../store/countries/countries.selectors';
import { loadCountries } from '../../store/countries/countries.actions';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule  ],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country$!: Observable<Country | null>;
  nativeName: string = 'N/A';
  currencies: string = 'N/A';
  languages: string = 'N/A';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
  console.log('✅ CountryDetailComponent initialized');

  this.country$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const name = params.get('name');
      console.log('📍 Route param:', name); // ✅ Log here

      return this.store.select(selectAllCountries).pipe(
        map((countries) =>
          countries.find(
            (c) => c.name.common.toLowerCase() === name?.toLowerCase()
          ) || null
        )
      );
    }),
    map((country) => {
      console.log('🛰️ Matched country in store:', country); // ✅ Log here
      if (country) {
        this.extractDetails(country);
      }
      return country;
    })
  );
}


  extractDetails(country: Country): void {
    const native = country.name?.nativeName;
    if (native) {
      const firstKey = Object.keys(native)[0];
      this.nativeName = native[firstKey]?.common || 'N/A';
    }

    if (country.currencies) {
      this.currencies = Object.values(country.currencies)
        .map((c: any) => c.name)
        .join(', ');
    }

    if (country.languages) {
      this.languages = Object.values(country.languages).join(', ');
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
