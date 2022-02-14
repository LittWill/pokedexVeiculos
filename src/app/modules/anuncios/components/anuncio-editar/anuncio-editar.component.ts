import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio-editar',
  templateUrl: './anuncio-editar.component.html',
  styleUrls: ['./anuncio-editar.component.scss']
})
export class AnuncioEditarComponent {
  @Input() anuncio!: IAnuncio;

  constructor(private router: Router) { }

  irParaEdicao(anuncio: IAnuncio): void {
    this.router.navigate(['anuncios/editar', JSON.stringify(anuncio)]);
  }
}
