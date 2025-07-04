import { Component, inject, OnInit } from '@angular/core';
import { loadCountries, loadCountry } from '../../store/countries/countries.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
// import { selectCountry } from '../../store/countries/countries.selectors';

import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectCountry } from '../../store/countries/countries.selector';
// import { Country } from '../../models/country';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-details',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  country$ = this.store.select(selectCountry);
  id: string | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.store.dispatch(loadCountry({ id: this.id }));
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  showBorderCountryDetails(border: string) {
    this.router.navigate(['/country', border]);
  }
}
