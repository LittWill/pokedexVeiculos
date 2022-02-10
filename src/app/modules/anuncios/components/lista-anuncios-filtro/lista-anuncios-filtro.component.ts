import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';
import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'lista-anuncios-filtro',
  templateUrl: './lista-anuncios-filtro.component.html',
  styleUrls: ['./lista-anuncios-filtro.component.scss']
})
export class ListaAnunciosFiltroComponent implements OnInit {
  listaAnuncios: IAnuncio[] = [];

  constructor(
    private anunciosService: AnunciosService,
    private dialog: DialogService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const filtro = <string>localStorage.getItem(ELocalStorageKey.PESQUISA);
    console.log(filtro);
    
    this.anunciosService.listarAnunciosFiltrados(filtro).subscribe(anuncios => {
      if (anuncios.length === 0) {
        this.dialog.openDialog(
          {
            titulo: 'Nenhum resultado',
            mensagem: 'Não existem veículos para o filtro informado.',
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
        this.router.navigate(['home']);
      }
    );
  }
}
