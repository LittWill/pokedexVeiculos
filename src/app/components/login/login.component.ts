import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICredenciaisDeAcesso } from 'src/app/interfaces/ICredenciaisDeAcesso';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formulario: FormGroup;
  credenciais: ICredenciaisDeAcesso;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required,]]
    });
    this.credenciais = this.formulario.value;
  }

  efetuarLogin(): void {
    if (this.formulario.invalid) return;
    this.credenciais = this.formulario.value;
    this.loginService.logar(this.credenciais);
    this.formulario.reset();
  }
}
