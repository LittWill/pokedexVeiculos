import { Component, OnInit } from '@angular/core';

import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';
import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-lista-anuncios-marca',
  templateUrl: './lista-anuncios-marca.component.html',
  styleUrls: ['./lista-anuncios-marca.component.scss']
})
export class ListaAnunciosMarcaComponent implements OnInit {
  listaAnuncios: IAnuncio[] = [];

  constructor(
    private anunciosService: AnunciosService,
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
    const marcaId = <number><unknown>localStorage.getItem(ELocalStorageKey.MARCA_ID);
    this.anunciosService.listarAnunciosPorMarca(marcaId).subscribe(anuncios => {
      this.listaAnuncios = anuncios;
    },
      () => {
        this.dialog.openDialog(
          {
            titulo: 'Houve um erro',
            mensagem: 'Desculpe por favor tente novamente.',
            botaoText: 'Fechar'
          }
        );
      }
    );
  }
}
