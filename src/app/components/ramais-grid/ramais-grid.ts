import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamalCardComponent } from '../ramal-card/ramal-card';
import { Ramal } from '../../shared/models/ramal';

@Component({
  selector: 'app-ramais-grid',
  standalone: true,
  imports: [CommonModule, RamalCardComponent],
  templateUrl: './ramais-grid.html',
  styleUrl: './ramais-grid.css'
})
export class RamaisGridComponent {
  @Input({ required: true }) ramais!: Ramal[];
  @Input() loading = false;
  @Input() query = '';

  readonly skeletons = Array(6).fill(null);
}
