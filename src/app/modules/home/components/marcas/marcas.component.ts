import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';
import { IMarca } from 'src/app/interfaces/IMarca';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  marcas: IMarca[];

  constructor(private router: Router) {
    this.marcas = [
      {
        id: 84,
        imagemLogo: '../../../../../assets/images/ford-logo-home.png',
        nome: 'Ford',
      },
      {
        id: 74,
        imagemLogo: '../../../../../assets/images/chevrolet-logo-home.png',
        nome: 'Chevrolet',
      },
      {
        id: 114,
        imagemLogo: '../../../../../assets/images/volkswagen-logo-home.png',
        nome: 'Volkswagen',
      },
      {
        id: 104,
        imagemLogo: '../../../../../assets/images/fiat-logo-home.png',
        nome: 'Fiat',
      },
      {
        id: 94,
        imagemLogo: '../../../../../assets/images/renault-logo-home.png',
        nome: 'Renault',
      },
      {
        id: 124,
        imagemLogo: '../../../../../assets/images/hyundai-logo-home.png',
        nome: 'Hyundai',
      },
      {
        id: 4,
        imagemLogo: '../../../../../assets/images/honda-logo-home.png',
        nome: 'Honda',
      },
      {
        id: 134,
        imagemLogo: '../../../../../assets/images/toyota-logo-home.png',
        nome: 'Toyota',
      },
    ]
  }

  ngOnInit(): void {
  }

  listarVeiculosPorMarca(marcaId: number) {
    localStorage.setItem(ELocalStorageKey.MARCA_ID, JSON.stringify(marcaId));
    this.router.navigate(['anuncios/marca']);
  }
}
