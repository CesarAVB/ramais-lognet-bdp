import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent implements OnDestroy {
  @Input() set query(value: string) {
    if (value !== this._inputValue) {
      this._inputValue = value;
    }
  }

  @Output() readonly queryChange = new EventEmitter<string>();

  _inputValue = '';

  private readonly destroy$ = new Subject<void>();
  private readonly input$ = new Subject<string>();

  constructor() {
    this.input$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => this.queryChange.emit(value));
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this._inputValue = value;
    this.input$.next(value);
  }

  clear(): void {
    this._inputValue = '';
    this.input$.next('');
    this.queryChange.emit('');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
