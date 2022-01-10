import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICredenciaisDeAcesso } from 'src/app/interfaces/ICredenciaisDeAcesso';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  credenciais: ICredenciaisDeAcesso;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this.formulario = this.formBuilder.group({
      email: [null],
      senha: [null]
    });
    this.credenciais = this.formulario.value;
    
    
   }

  ngOnInit(): void {
  }

  efetuarLogin() {
    this.credenciais = this.formulario.value;
    this.loginService.logar(this.credenciais);
    console.log(this.credenciais);
  }

}
