import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QUIZZES, QuizQuestion } from '../data/quiz.data';
import { MODULES } from '../data/modules.data';
import { ThemeToggle } from '../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-quiz',
  imports: [ThemeToggle],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz implements OnInit {
  moduleId = 0;
  moduleTitle = '';
  moduleIcon = '';
  questions: QuizQuestion[] = [];

  current = 0;
  selected: number | null = null;
  submitted = false;
  score = 0;
  finished = false;
  answers: (number | null)[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.moduleId = Number(this.route.snapshot.paramMap.get('id'));
    const mod = MODULES.find(m => m.id === this.moduleId);
    this.moduleTitle = mod?.title ?? '';
    this.moduleIcon = mod?.icon ?? '📚';
    const quiz = QUIZZES.find(q => q.moduleId === this.moduleId);
    this.questions = quiz?.questions ?? [];
    this.answers = new Array(this.questions.length).fill(null);
  }

  get currentQ(): QuizQuestion { return this.questions[this.current]; }
  get isLast(): boolean { return this.current === this.questions.length - 1; }
  get progress(): number { return ((this.current + 1) / this.questions.length) * 100; }

  select(idx: number) {
    if (this.submitted) return;
    this.selected = idx;
  }

  submit() {
    if (this.selected === null) return;
    this.submitted = true;
    this.answers[this.current] = this.selected;
    if (this.selected === this.currentQ.answer) this.score++;
  }

  next() {
    if (this.isLast) { this.finished = true; return; }
    this.current++;
    this.selected = null;
    this.submitted = false;
  }

  restart() {
    this.current = 0;
    this.selected = null;
    this.submitted = false;
    this.score = 0;
    this.finished = false;
    this.answers = new Array(this.questions.length).fill(null);
  }

  goBack() { this.router.navigate(['/practice']); }
  goHome() { this.router.navigate(['/']); }

  get scorePercent(): number { return Math.round((this.score / this.questions.length) * 100); }
  get scoreLabel(): string {
    if (this.scorePercent >= 80) return '🎉 Excellent!';
    if (this.scorePercent >= 60) return '👍 Good job!';
    return '📖 Keep studying!';
  }
}
