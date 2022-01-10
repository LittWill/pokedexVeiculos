import { Injectable } from '@angular/core';

import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  logar(credenciais: ICredenciaisDeAcesso) {
    this.httpService.postLogin(credenciais).subscribe(token => console.log(token));
  }

  deslogar() {

  }
}
