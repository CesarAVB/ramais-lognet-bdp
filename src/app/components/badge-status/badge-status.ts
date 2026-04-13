import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-status.html',
  styleUrl: './badge-status.css'
})
export class BadgeStatusComponent {
  @Input() valor = '';

  get classeBootstrap(): string {
    const v = this.valor?.toUpperCase();
    if (['ATIVO', 'APROVADO', 'CONFIRMADO', 'REALIZADO', 'PAGO'].includes(v)) return 'bg-success';
    if (['INATIVO', 'CANCELADO', 'REPROVADO', 'VENCIDO', 'REJEITADO'].includes(v)) return 'bg-danger';
    if (['PENDENTE', 'AGENDADO', 'PARCIAL', 'AGUARDANDO'].includes(v)) return 'bg-warning text-dark';
    return 'bg-secondary';
  }
}
