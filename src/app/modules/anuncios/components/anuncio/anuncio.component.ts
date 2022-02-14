import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent {
  @Input() anuncio!: IAnuncio;

  constructor(private router: Router, private route: ActivatedRoute) { }

  abrirDetalhes(anuncio: IAnuncio): void {
    const rotaAtual = this.route.snapshot.url[0].toString();

    if (rotaAtual === 'usuario') {
      this.router.navigate(['anuncios/editar', JSON.stringify(anuncio)]);
      return;
    }

    localStorage.setItem(ELocalStorageKey.ANUNCIO, JSON.stringify(anuncio));
    this.router.navigate(['anuncios/detalhes']);
  }
}
