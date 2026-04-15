import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner';
import { AlertComponent } from './components/alert/alert';
import { HeaderComponent } from './components/header/header';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { RamaisGridComponent } from './components/ramais-grid/ramais-grid';
import { FooterComponent } from './components/footer/footer';
import { RamaisService } from './services/ramais';
import { AlertService } from './services/alert';
import { Ramal } from './shared/models/ramal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    AlertComponent,
    HeaderComponent,
    SearchBarComponent,
    RamaisGridComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  private readonly ramaisService = inject(RamaisService);
  private readonly alertService = inject(AlertService);

  readonly ramais = signal<Ramal[]>([]);
  readonly query = signal<string>('');
  readonly loading = signal<boolean>(true);
  readonly erro = signal<boolean>(false);

  readonly filtered = computed(() => {
    const q = this.normalizar(this.query());
    if (!q) return this.ramais();
    return this.ramais().filter(r =>
      this.normalizar(r.setor).includes(q) ||
      r.ramal.toString().includes(q)
    );
  });

  readonly totalRamais = computed(() => this.ramais().length);
  readonly filteredTotal = computed(() => this.filtered().length);

  ngOnInit(): void {
    this.ramaisService.carregar().subscribe({
      next: (dados) => {
        this.ramais.set(dados);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.erro.set(true);
        this.alertService.erro('Não foi possível carregar os ramais. Verifique o arquivo de dados.');
      }
    });
  }

  onQueryChange(q: string): void {
    this.query.set(q);
  }

  private normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
