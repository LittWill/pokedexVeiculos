import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.scss']
})
export class ListaAnunciosComponent implements OnInit {
  listaAnuncios: IAnuncio[] = [];

  constructor(
    private anunciosService: AnunciosService,
    private dialog: DialogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.anunciosService.listarAnuncios().subscribe(anuncios => {
      if (anuncios.length === 0) {
        this.dialog.openDialog(
          {
            titulo: 'Aviso',
            mensagem: 'Esta marca ainda não possui anúncios.',
            botaoText: 'Fechar'
          }
        );
        this.router.navigate(['home']);
        return;
      }
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
