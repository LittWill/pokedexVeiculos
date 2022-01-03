import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IVeiculo } from '../interfaces/IVeiculo';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<IVeiculo[]>{
    return this.http.get<IVeiculo[]>('https://pokedex-veiculos.herokuapp.com/veiculos');
  }
}
