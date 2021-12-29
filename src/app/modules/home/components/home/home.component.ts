import { Component, OnInit } from '@angular/core';
import { IVeiculo } from 'src/app/interfaces/IVeiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
