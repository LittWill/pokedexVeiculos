import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, first, map, startWith } from 'rxjs/operators';

// import { MaxSizeValidator } from '@angular-material-components/file-input';

import { INovoAnuncio } from 'src/app/interfaces/IAnuncio';
import { IMarca } from 'src/app/interfaces/IMarca';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'novo-anuncio',
  templateUrl: './novo-anuncio.component.html',
  styleUrls: ['./novo-anuncio.component.scss']
})
export class NovoAnuncioComponent implements OnInit {
  formulario: FormGroup;
  novoAnuncio!: INovoAnuncio;
  imagemControl: FormControl;
  marcaIdControl: FormControl;

  //ngx_mat_file_input_config 
  disabled = false;
  multiple = false;
  accept = '.png, .jpg, .jpeg';
  // color: ThemePalette = 'primary',
  // maxSize = 16;

  //mat-autocomplete-config
  opcoes: IMarca[] = [];
  opcoesFiltradas = new Observable<any[]>();

  campoÉValido = new Observable<boolean>();

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
      modelo: [null, [Validators.required,]],
    });
    this.imagemControl = new FormControl(null, [
      Validators.required,
      // MaxSizeValidator(this.maxSize * 1024)
    ]);
    this.marcaIdControl = new FormControl(null, [
      Validators.required,
    ]);
    this._preencherNovoAnuncio();
  }

  ngOnInit(): void {
    this.anunciosService.listarMarcas().subscribe(marcas => this.opcoes = marcas);
    this.opcoesFiltradas = this.marcaIdControl.valueChanges.pipe(
      startWith(''),
      map(valor => this._filtrar(valor)),
    );
    this.marcaIdControl.valueChanges.subscribe(
      valor => {
        if (!this._opcaoÉValida(valor)) {
          this.marcaIdControl.setErrors(Validators.required);
        }
      }
    );
  }

  efetuarRegistro(): void {
    // if (this.formulario.invalid || this.imagemControl.invalid || this.marcaIdControl.invalid) return;
    this._preencherNovoAnuncio();
    this.anunciosService.adicionar(this.novoAnuncio, this.imagemControl.value);
    this._limparFormulario();
  }

  private _opcaoÉValida(valor: string) {
    let temNaLista = this.opcoes.find(opcao => opcao.nome === valor);
    if (temNaLista) return true;

    return false;
  }

  private _preencherNovoAnuncio(): void {
    this.novoAnuncio = {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      veiculo: {
        ano: this.formulario.value.ano,
        cor: this.formulario.value.cor,
        km: this.formulario.value.km,
        marcaId: <number>this._obterMarcaId(this.marcaIdControl.value),
        modelo: this.formulario.value.modelo,
      }
    };
  }

  private _limparFormulario(): void {
    this.formulario.reset();
    this.imagemControl.reset();
    this.formulario.markAsTouched();
  }

  private _filtrar(value: string): any[] {
    const valorFiltrado = value.toLowerCase();
    return this.opcoes.filter(opcao => opcao.nome.toLowerCase().includes(valorFiltrado));
  }

  private _obterMarcaId(nome: string): number | undefined {
    nome = this.marcaIdControl.value;
    return this.opcoes.find(marca => marca.nome === nome)?.id;
  }
}