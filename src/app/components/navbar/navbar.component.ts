import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from '../../store/theme/theme.actions';
import { selectTheme } from '../../store/theme/theme.selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public store = inject(Store);
  themeToggle$!: Observable<boolean>;

  toggleTheme() {
    this.store.dispatch(toggleTheme());
    this.themeToggle$ = this.store.select(selectTheme);
    this.themeToggle$.subscribe((isDarkMode: boolean) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
      this.setHeaderBg(isDarkMode ? '#2c3e50' : '#ffffff');
    });
  }

  setHeaderBg(color: string) {
    document.documentElement.style.setProperty('--header-bg', color);
    document.documentElement.style.setProperty('--card-bg', color);
  }
}
