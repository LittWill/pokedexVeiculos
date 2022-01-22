import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ELocalStorageKey } from '../enums/ELocalStorageKey';
import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioEstaLogado = new BehaviorSubject(false);

  constructor(private httpService: HttpService) { }

  private alterarEstadoDoMenu(): void {
    this.usuarioEstaLogado.next(true);
  }

  logar(credenciais: ICredenciaisDeAcesso): void {
    this.httpService.postLogin(credenciais).subscribe(data => {
      const { token, usuario } = data;
      localStorage.setItem(ELocalStorageKey.TOKEN, token);
      localStorage.setItem(ELocalStorageKey.USUARIO_LOGADO_INFO, JSON.stringify(usuario));
      this.alterarEstadoDoMenu();
    });
  }

  deslogar(): void {
    localStorage.removeItem(ELocalStorageKey.TOKEN);
    localStorage.removeItem(ELocalStorageKey.USUARIO_LOGADO_INFO);
    this.usuarioEstaLogado.next(false);
  }
}
