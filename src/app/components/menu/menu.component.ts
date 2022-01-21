import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estaLogado = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.logado.subscribe(valor => this.estaLogado = valor);
    console.log(this.estaLogado);
  }

  encerrarSessao() {
    this.loginService.deslogar();
    
    // this.verificarLogin();
    console.log(this.estaLogado);
  }

  private verificarLogin() {
    this.estaLogado = this.loginService.usuarioEstaLogado;
  }
}
