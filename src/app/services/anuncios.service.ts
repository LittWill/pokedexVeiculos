import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAnuncio } from '../interfaces/IAnuncio';
import { IUsuario } from '../interfaces/IUsuario';
import { DialogService } from './dialog.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(
    private httpService: HttpService,
    private dialog: DialogService
  ) { }

  listar(): Observable<IAnuncio[]> {
    return this.httpService.getAnuncios();
  }

  adicionar(novoAnuncio: any) {
    this.httpService.postNovoAnuncio(novoAnuncio).subscribe(res => {
      this.dialog.openDialog({titulo: 'Sucesso', mensagem: 'Anúncio adicionado.', botaoText: 'Ok'})
    },
      err => {
        this.dialog.openDialog({titulo: 'Erro', mensagem: 'Desculpe ocorreu um problema, tente novamente.', botaoText: 'Fechar'})
      }
    );
  }
}
