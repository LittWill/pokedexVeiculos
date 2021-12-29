import { Component, OnInit } from '@angular/core';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaVeiculos: any[] = [];

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.listar().subscribe(veiculos => this.listaVeiculos = veiculos);
  }

}
