import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario = this.formBuilder.group({
      pesquisa: [null]
    });
  }

  enviarPesquisa(): void {
    const pesquisa = this.formulario.controls.pesquisa.value;
    this._reloadListaDeAnuncios(pesquisa);
  }

  private _reloadListaDeAnuncios(pesquisa: string) {
    this.router.navigate(['/anuncios/filtro', pesquisa], {relativeTo: this.route});
  }
}
