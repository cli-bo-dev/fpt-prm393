import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MODULES } from '../data/modules.data';
import { QUIZZES } from '../data/quiz.data';
import { ThemeToggle } from '../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-practice',
  imports: [ThemeToggle],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
  modules = MODULES;
  quizzes = QUIZZES;

  constructor(private router: Router) {}

  hasQuiz(moduleId: number): boolean {
    return this.quizzes.some(q => q.moduleId === moduleId);
  }

  questionCount(moduleId: number): number {
    return this.quizzes.find(q => q.moduleId === moduleId)?.questions.length ?? 0;
  }

  openQuiz(moduleId: number) { this.router.navigate(['/quiz', moduleId]); }
  goHome() { this.router.navigate(['/']); }
}
