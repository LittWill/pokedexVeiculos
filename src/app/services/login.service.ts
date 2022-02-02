import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ELocalStorageKey } from '../enums/ELocalStorageKey';
import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { DialogService } from './dialog.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioEstaLogado = new BehaviorSubject(false);

  constructor(
    private httpService: HttpService,
    private router: Router,
    private dialog: DialogService
  ) { }

  private alterarEstadoDoMenu(): void {
    this.usuarioEstaLogado.next(true);
  }

  logar(credenciais: ICredenciaisDeAcesso): void {
    this.httpService.postLogin(credenciais).subscribe(data => {
      const { token, usuario } = data.resposta;
      localStorage.setItem(ELocalStorageKey.TOKEN, token);
      localStorage.setItem(ELocalStorageKey.USUARIO_LOGADO_INFO, JSON.stringify(usuario));
      this.dialog.openDialog(
        {
          titulo: 'Login efetuado com sucesso', 
          mensagem: `Estamos muito felizes por ver você aqui ${usuario.nome}.`, 
          botaoText: 'Legal' 
        }
      );
      this.alterarEstadoDoMenu();
      this.router.navigate(['home']);
    },
      err => {
        if (err.status === 401)
          this.dialog.openDialog({ titulo: 'Erro de Login', mensagem: 'Email e/ou Senha incorretos', botaoText: 'Fechar' });
        else
          console.log(err);
      }
    );
  }

  deslogar(): void {
    localStorage.removeItem(ELocalStorageKey.TOKEN);
    localStorage.removeItem(ELocalStorageKey.USUARIO_LOGADO_INFO);
    this.usuarioEstaLogado.next(false);
  }
}
