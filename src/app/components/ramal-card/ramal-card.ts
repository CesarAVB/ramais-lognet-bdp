import { Component, Input } from '@angular/core';
import { Ramal } from '../../shared/models/ramal';

@Component({
  selector: 'app-ramal-card',
  standalone: true,
  templateUrl: './ramal-card.html',
  styleUrl: './ramal-card.css'
})
export class RamalCardComponent {
  @Input({ required: true }) ramal!: Ramal;
}
