import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent {
  @Input() anuncio!: IAnuncio;
 
  constructor(private router: Router) { }

  abrirDetalhes(anuncio: IAnuncio): void {
    localStorage.setItem(ELocalStorageKey.ANUNCIO, JSON.stringify(anuncio));
    this.router.navigate(['anuncios/detalhes']);
  }
}
