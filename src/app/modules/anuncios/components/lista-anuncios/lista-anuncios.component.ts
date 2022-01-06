import { Component, OnInit } from '@angular/core';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {
  listaAnuncios: IAnuncio[] = [];

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit(): void {
    this.anunciosService.listar().subscribe(anuncios => {
      this.listaAnuncios = anuncios;
    })

    this.anunciosService.listar().subscribe(anuncios => {
      this.listaAnuncios = anuncios.concat(anuncios);
    })
  }
}
