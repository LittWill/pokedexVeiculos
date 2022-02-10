import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      pesquisa: [null]
    });
  }

  enviarPesquisa(): void {
    const pesquisa = this.formulario.controls.pesquisa.value;
    localStorage.setItem(ELocalStorageKey.PESQUISA, pesquisa);
    this.router.navigate(['anuncios/filtro']);
  }
}
