import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { MaxSizeValidator } from '@angular-material-components/file-input';
import { IConfig } from 'ngx-mask';

import { INovoAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'novo-anuncio',
  templateUrl: './novo-anuncio.component.html',
  styleUrls: ['./novo-anuncio.component.scss']
})
export class NovoAnuncioComponent {
  formulario: FormGroup;
  novoAnuncio!: INovoAnuncio;
  // color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string = '.png, .jpg, .jpeg';
  imagemControl: FormControl;
  public imagens: any;
  maxSize = 16;
  maskConfig: Partial<IConfig> = {
    validation: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private anunciosService: AnunciosService,
  ) {
    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required,]],
      valor: [null, [Validators.required,]],
      ano: [null, [Validators.required,]],
      cor: [null, [Validators.required,]],
      km: [null, [Validators.required,]],
      marcaId: [null, [Validators.required,]],
      modelo: [null, [Validators.required,]],
    });
    this.imagemControl = new FormControl(this.imagens, [
      Validators.required,
      // MaxSizeValidator(this.maxSize * 1024)
    ]);
    this.preencherNovoAnuncio();
  }

  private preencherNovoAnuncio(): void {
    this.novoAnuncio = {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      veiculo: {
        ano: this.formulario.value.ano,
        cor: this.formulario.value.cor,
        km: this.formulario.value.km,
        marcaId: this.formulario.value.marcaId,
        modelo: this.formulario.value.modelo,
      }
    };
  }

  private limparFormulario(): void {
    this.formulario.reset();
    this.imagemControl.reset();
    this.formulario.markAsTouched();
  }

  efetuarRegistro(): void {
    // if (this.formulario.invalid || this.imagemControl.invalid) return;
    this.preencherNovoAnuncio();
    console.log(this.novoAnuncio);
    console.log(this.imagemControl.value);
    this.anunciosService.adicionar(this.novoAnuncio, this.imagemControl.value);
    this.limparFormulario();
  }
}
