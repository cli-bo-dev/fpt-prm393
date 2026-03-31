import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MODULES, ModuleData } from '../data/modules.data';
import { ThemeToggle } from '../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-module-detail',
  imports: [ThemeToggle],
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.css',
})
export class ModuleDetail implements OnInit {
  module: ModuleData | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.module = MODULES.find(m => m.id === id);
  }

  goBack() { this.router.navigate(['/documents']); }
  goHome() { this.router.navigate(['/']); }
}
