import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  template: `
    <button class="theme-btn" (click)="theme.toggle()" [title]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ theme.isDark() ? '☀️' : '🌙' }}
    </button>
  `,
  styles: [`
    .theme-btn {
      background: none;
      border: 1px solid var(--border-hover);
      border-radius: 8px;
      padding: 0.35rem 0.6rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
      line-height: 1;
    }
    .theme-btn:hover { background: var(--highlight-bg); }
  `]
})
export class ThemeToggle {
  constructor(public theme: ThemeService) {}
}
