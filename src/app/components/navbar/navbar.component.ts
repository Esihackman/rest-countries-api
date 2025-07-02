import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDarkMode } from '../../store/theme/theme.actions';
import { selectDarkMode } from '../../store/theme/theme.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  darkMode$: Observable<boolean>;

  constructor(private store: Store) {
    this.darkMode$ = this.store.select(selectDarkMode);
  }

  toggleTheme(): void {
    this.store.dispatch(toggleDarkMode());
  }
}
