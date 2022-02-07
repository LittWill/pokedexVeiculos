import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnuncio } from '../interfaces/IAnuncio';

import { AnunciosService } from './anuncios.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private anunciosService: AnunciosService) { }

  obterAnunciosPorMarca(marcaId: number): Observable<IAnuncio[]> {
    return this.anunciosService.listarAnunciosPorMarca(marcaId)
  }
}
