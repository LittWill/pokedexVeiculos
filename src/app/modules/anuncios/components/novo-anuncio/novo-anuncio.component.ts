import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { INovoAnuncio } from 'src/app/interfaces/IAnuncio';

// import { IAnuncio } from 'src/app/interfaces/IAnuncio';
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
  imageBase64 = "";

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

  private preencherNovoAnuncio() {
    this.novoAnuncio = {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      veiculo: {
        ano: this.formulario.value.ano,
        cor: this.formulario.value.cor,
        imagem: '',
        km: this.formulario.value.km,
        marcaId: this.formulario.value.marcaId,
        modelo: this.formulario.value.modelo,
      }
    };
  }

  private getBase64(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => result.next(reader.result?.toString());
    reader.onerror = (error) => console.log('Error: ', error);
    return result;
  }

  private limparFormulario() {
    this.formulario.reset();
    this.imagemControl.reset();
    this.formulario.markAsTouched();
  }

  efetuarRegistro() {
    if(this.formulario.invalid || this.imagemControl.invalid) return;
    const fileImage = <File>this.imagemControl.value;
    this.preencherNovoAnuncio();
    this.getBase64(fileImage).subscribe(fileImagemBase64 => {
      this.novoAnuncio.veiculo.imagem = fileImagemBase64;
      this.anunciosService.adicionar(this.novoAnuncio);
      this.limparFormulario();
    });
  }
}
