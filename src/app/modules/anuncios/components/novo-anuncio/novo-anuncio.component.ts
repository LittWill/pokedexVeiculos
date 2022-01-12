import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';
import { AnunciosService } from 'src/app/services/anuncios.service';



@Component({
  selector: 'novo-anuncio',
  templateUrl: './novo-anuncio.component.html',
  styleUrls: ['./novo-anuncio.component.css']
})
export class NovoAnuncioComponent implements OnInit {
  formulario: FormGroup;
  novoAnuncio: IAnuncio;

  constructor(
    private formBuilder: FormBuilder,
    private anunciosService: AnunciosService,
  ) {
    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required, ]],
      valor: [null, [Validators.required, ]],
      ano: [null, [Validators.required, ]],
      cor: [null, [Validators.required, ]],
      imagem: [null, [Validators.required, ]],
      km: [null, [Validators.required, ]],
      marcaId: [null, [Validators.required, ]],
      modelo: [null, [Validators.required, ]],
      
    });
    this.novoAnuncio = this.formulario.value;
  }

  ngOnInit(): void {
  }

  efetuarRegistro() {
    this.novoAnuncio = this.formulario.value;
    console.log(this.novoAnuncio);
    
    if(this.formulario.invalid) return;
    this.anunciosService.adicionar(this.novoAnuncio);
  }
}
