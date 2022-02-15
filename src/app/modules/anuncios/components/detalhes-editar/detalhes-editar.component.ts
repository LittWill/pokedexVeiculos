import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { IAnuncio, INovoAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-detalhes-editar',
  templateUrl: './detalhes-editar.component.html',
  styleUrls: ['./detalhes-editar.component.scss']
})
export class DetalhesEditarComponent implements OnInit {
  anuncio!: IAnuncio;
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private anunciosService: AnunciosService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => JSON.parse(params.anuncio)),
      )
      .subscribe(anuncio => {
        this.anuncio = anuncio;
        this._criarFormulario();
      },
        () => {

        }
      );
  }

  salvarAlteracoes(id: number): void {
    this.anunciosService.editar(this._anuncioEditado(), id);
  }

  voltar(): void {
    this.router.navigate(['anuncios/usuario']);
  }

  private _anuncioEditado(): INovoAnuncio {
    return {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      veiculo: {
        ano: this.formulario.value.ano,
        cor: this.formulario.value.cor,
        km: this.formulario.value.km,
        marcaId: this.formulario.value.marcaId,
        modelo: this.formulario.value.modelo,
      }
    }
  }

  private _criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      descricao: [this.anuncio.descricao, [Validators.required]],
      valor: [this.anuncio.valor, [Validators.required,]],
      ano: [this.anuncio.veiculo.ano, [Validators.required,]],
      cor: [this.anuncio.veiculo.cor, [Validators.required,]],
      km: [this.anuncio.veiculo.km, [Validators.required,]],
      marcaId: [this.anuncio.veiculo.marca.id, [Validators.required,]],
      modelo: [this.anuncio.veiculo.modelo, [Validators.required,]],
    });
  }
}
