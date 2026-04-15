import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  @Input() totalRamais = 0;
  @Input() filteredTotal = 0;
  @Input() query = '';
}
