import { Component, OnInit } from '@angular/core';
import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {
  listaAnuncios: IAnuncio[] = [];

  constructor(
    private anunciosService: AnunciosService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.open();
    this.anunciosService.listar().subscribe(anuncios => {
      this.listaAnuncios = anuncios;
    })

    this.anunciosService.listar().subscribe(anuncios => {
      this.listaAnuncios = anuncios.concat(anuncios);
    })
    this.loaderService.close();
  }
}
