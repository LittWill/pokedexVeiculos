import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio-editar',
  templateUrl: './anuncio-editar.component.html',
  styleUrls: ['./anuncio-editar.component.scss']
})
export class AnuncioEditarComponent {
  @Input() anuncio!: IAnuncio;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  irParaEdicao(anuncio: IAnuncio): void {
    this.router.navigate(['anuncios/editar', JSON.stringify(anuncio)]);
  }
}
