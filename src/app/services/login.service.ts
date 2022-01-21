import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ELocalStorageKey } from '../enums/ELocalStorageKey';

import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _usuarioEstaLogado = false;
  logado = new BehaviorSubject(false);

  constructor(private httpService: HttpService) { }

  get usuarioEstaLogado() {
    return this._usuarioEstaLogado;
  }

  changeValue() {
    this.logado.next(true);
  }

  logar(credenciais: ICredenciaisDeAcesso) {
    this.httpService.postLogin(credenciais).subscribe(data => {
      const {token, usuario} = data;
      localStorage.setItem(ELocalStorageKey.TOKEN, token);
      localStorage.setItem(ELocalStorageKey.USUARIO_LOGADO_INFO, usuario);
      // this._usuarioEstaLogado = true;
    });
  }

  deslogar() {
    localStorage.removeItem(ELocalStorageKey.TOKEN);
    localStorage.removeItem(ELocalStorageKey.USUARIO_LOGADO_INFO);
    this.logado.next(false);
    // this._usuarioEstaLogado = false;
  }
}
