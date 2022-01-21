import { Injectable } from '@angular/core';
import { ELocalStorageKey } from '../enums/ELocalStorageKey';

import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  logar(credenciais: ICredenciaisDeAcesso) {
    this.httpService.postLogin(credenciais).subscribe(data => {
      const {token, usuario} = data;
      console.log(token);
      localStorage.setItem(ELocalStorageKey.TOKEN, token);
      localStorage.setItem(ELocalStorageKey.USUARIO_LOGADO_INFO, usuario);
    });
  }

  deslogar() {
    localStorage.removeItem(ELocalStorageKey.TOKEN);
    localStorage.removeItem(ELocalStorageKey.USUARIO_LOGADO_INFO);
  }
}
