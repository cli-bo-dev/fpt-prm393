import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Documents } from './documents/documents';
import { Practice } from './practice/practice';
import { ModuleDetail } from './module-detail/module-detail';
import { Quiz } from './quiz/quiz';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'documents', component: Documents },
  { path: 'practice', component: Practice },
  { path: 'module/:id', component: ModuleDetail },
  { path: 'quiz/:id', component: Quiz },
  { path: '**', redirectTo: '' },
];
