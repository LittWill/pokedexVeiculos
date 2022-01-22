import { Component, OnInit } from '@angular/core';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';
import { IUsuario } from 'src/app/interfaces/IUsuario';

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _estaLogado = false;
  usuarioLogado: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.usuarioEstaLogado.subscribe(estaLogado => {
      this._estaLogado = estaLogado;
      this.obterDadosDoUsuarioLogado();
    });
  }

  get estaLogado(): boolean {
    return this._estaLogado;
  }

  private obterDadosDoUsuarioLogado(): void {
    this.usuarioLogado = JSON.parse(<string>localStorage.getItem(ELocalStorageKey.USUARIO_LOGADO_INFO));
  }

  encerrarSessao(): void {
    this.loginService.deslogar();
  }
}
