import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent {
  formulario: FormGroup;
  novoUsuario: IUsuario;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required,]],
      sobrenome: [null, [Validators.required,]],
      telefone: [null, [Validators.required,]],
      perfilId: [null, [Validators.required,]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required,]],
    });
    this.novoUsuario = this.formulario.value;
  }

  efetuarRegistro(): void {
    this.novoUsuario = this.formulario.value;
    if (this.formulario.invalid) return;
    this.usuarioService.adicionarNovoUsuario(this.novoUsuario);
  }
}
