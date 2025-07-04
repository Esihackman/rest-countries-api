import { Component, Input } from '@angular/core';
import { Country } from '../../models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;
  constructor(private router: Router) {}

  onSelect(code: string) {
    this.router.navigate(['country', code]);
  }
}
