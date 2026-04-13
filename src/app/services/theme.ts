import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'ramais-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(this._readPreference());

  constructor() {
    this._apply(this.isDark());
  }

  toggle(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    this._apply(next);
    localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
  }

  private _apply(dark: boolean): void {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  private _readPreference(): boolean {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
