import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ramal } from '../shared/models/ramal';

@Injectable({ providedIn: 'root' })
export class RamaisService {
  private readonly http = inject(HttpClient);

  carregar(): Observable<Ramal[]> {
    return this.http.get<Ramal[]>('assets/data/ramais.json');
  }
}
