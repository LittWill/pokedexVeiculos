import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// import { MaxSizeValidator } from '@angular-material-components/file-input';

import { INovoAnuncio } from 'src/app/interfaces/IAnuncio';
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
  // color: ThemePalette = 'primary',
  disabled = false;
  multiple = false;
  accept = '.png, .jpg, .jpeg';
  // maxSize = 16;

  //mat-autocomplete-config
  options = [{ id: 4, nome: 'Honda' }, { id: 14, nome: 'Toyota' }];
  filteredOptions = new Observable<any[]>();

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
    this.filteredOptions = this.marcaIdControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  efetuarRegistro(): void {
    // if (this.formulario.invalid || this.imagemControl.invalid) return;
    this._preencherNovoAnuncio();
    console.log(this.novoAnuncio);
    console.log(this.imagemControl.value);
    console.log(this.marcaIdControl.value);
    this._obterMarcaId(this.marcaIdControl.value);

    this.anunciosService.adicionar(this.novoAnuncio, this.imagemControl.value);
    this._limparFormulario();
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

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  private _obterMarcaId(nome: string): number | undefined {
    nome = this.marcaIdControl.value;
    return this.options.find(marca => marca.nome === nome)?.id;
  }
}