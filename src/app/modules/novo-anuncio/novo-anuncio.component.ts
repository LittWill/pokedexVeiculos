import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'novo-anuncio',
  templateUrl: './novo-anuncio.component.html',
  styleUrls: ['./novo-anuncio.component.css']
})
export class NovoAnuncioComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, ]],
      sobrenome: [null, [Validators.required, ]],
      celular: [null, [Validators.required, ]],
      perfil: [null, [Validators.required, ]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, ]],
    });
  }

  ngOnInit(): void {
  }

  efetuarRegistro() {
    
  }
}
