import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
      pesquisa: ['', [Validators.required, Validators.minLength(2)]],
    });
    console.log(this.formulario);
    
  }

  enviarPesquisa(): void {
    const pesquisa = this.formulario.controls.pesquisa.value;
    this._reloadListaDeAnuncios(pesquisa);
    console.log(this.formulario);
  }

  private _reloadListaDeAnuncios(pesquisa: string) {
    this.router.navigate(['/anuncios/filtro', pesquisa], {relativeTo: this.route});
  }
}
