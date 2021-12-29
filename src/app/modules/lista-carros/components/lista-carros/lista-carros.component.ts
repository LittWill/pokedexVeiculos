import { Component, OnInit } from '@angular/core';

import { IVeiculo } from 'src/app/interfaces/IVeiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  listaVeiculos: IVeiculo[] = [];

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.listar().subscribe(veiculos =>{
      this.listaVeiculos = veiculos;
      console.log(this.listaVeiculos);
    })
  }

}
