import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from './http.service';

import { IUsuario } from '../interfaces/IUsuario';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpService: HttpService,
    private dialog: DialogService
  ) { }

  listarUsuarios(): Observable<IUsuario[]> {
    return this.httpService.getUsuarios();
  }

  adicionarNovoUsuario(novoUsuario: IUsuario): Subscription {
    return this.httpService.postNovoUsuario(novoUsuario).subscribe(res => {
      const { statusCode } = res;
      if (statusCode === 201)
        this.dialog.openDialog(
          {
            titulo: 'Sucesso',
            mensagem: 'Novo usuário adicionado com sucesso',
            botaoText: 'Ok'
          }
        );
    },
      ()=> {
        this.dialog.openDialog(
          {
            titulo: 'Erro',
            mensagem: 'Não foi possível adiciona-lo agora. Por favor tente novamente.',
            botaoText: 'Fechar'
          }
        );
      }
    );
  }
}
