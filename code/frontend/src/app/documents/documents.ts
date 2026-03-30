import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MODULES } from '../data/modules.data';

@Component({
  selector: 'app-documents',
  imports: [],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {
  modules = MODULES;
  constructor(private router: Router) {}
  openModule(id: number) { this.router.navigate(['/module', id]); }
  goBack() { this.router.navigate(['/']); }
}
