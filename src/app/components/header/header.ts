import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
}
