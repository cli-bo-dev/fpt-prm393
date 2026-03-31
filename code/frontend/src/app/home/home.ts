import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeToggle } from '../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-home',
  imports: [ThemeToggle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
  goTo(path: string) { this.router.navigate([path]); }
}
