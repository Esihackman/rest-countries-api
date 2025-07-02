import { Component, Renderer2, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDarkMode } from './store/theme/theme.selectors';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CountryListComponent],
  template: `
    <app-navbar></app-navbar>
    <app-country-list></app-country-list>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.store.select(selectDarkMode).subscribe((isDark) => {
      const body = document.body;
      if (isDark) {
        this.renderer.addClass(body, 'dark-mode');
      } else {
        this.renderer.removeClass(body, 'dark-mode');
      }
    });
  }
}
