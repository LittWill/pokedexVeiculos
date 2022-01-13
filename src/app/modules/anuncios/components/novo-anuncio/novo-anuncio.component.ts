import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';



@Component({
  selector: 'novo-anuncio',
  templateUrl: './novo-anuncio.component.html',
  styleUrls: ['./novo-anuncio.component.css']
})
export class NovoAnuncioComponent implements OnInit {
  formulario: FormGroup;
  novoAnuncio: any;
  // color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string = '.png, .jpg, .jpeg';
  imagemControl: FormControl;
  public imagens: any;
  maxSize = 16;

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
    ])
  }

  ngOnInit(): void {
    // this.imagemControl.valueChanges.subscribe((imagens: any) => {
    //   if (!Array.isArray(imagens)) {
    //     this.imagens = [imagens];
    //   } else {
    //     this.imagens = imagens;
    //   }
    // })
  }

  efetuarRegistro() {
    this.novoAnuncio = {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      veiculo: {
        ano: this.formulario.value.ano,
        cor: this.formulario.value.cor,
        imagem: this.formulario.value.imagem,
        km: this.formulario.value.km,
        marcaId: this.formulario.value.marcaId,
        modelo: this.formulario.value.modelo,
      }
    };
    console.log(this.novoAnuncio);
    console.log(this.imagemControl)

    if(this.formulario.invalid || this.imagemControl.invalid) return;
    this.anunciosService.adicionar(this.novoAnuncio);
  }
}
