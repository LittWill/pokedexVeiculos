import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _estaLogado = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.usuarioEstaLogado.subscribe(estaLogado => this._estaLogado = estaLogado);
  }

  get estaLogado(): boolean {
    return this._estaLogado;
  }

  encerrarSessao(): void {
    this.loginService.deslogar();
  }
}
