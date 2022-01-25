import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAnuncio, INovoAnuncio } from '../interfaces/IAnuncio';
import { DialogService } from './dialog.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  private _adicionadoComSucesso = false;

  constructor(
    private httpService: HttpService,
    private dialog: DialogService
  ) { }

  get adicionadoComSucesso() {
    return this._adicionadoComSucesso;
  }

  listar(): Observable<IAnuncio[]> {
    return this.httpService.getAnuncios();
  }

  adicionar(novoAnuncio: INovoAnuncio) {
    this.httpService.postNovoAnuncio(novoAnuncio).subscribe(res => {
      this.dialog.openDialog({titulo: 'Sucesso', mensagem: 'Anúncio adicionado.', botaoText: 'Ok'})
      this._adicionadoComSucesso = true;
    },
      err => {
        this.dialog.openDialog({titulo: 'Erro', mensagem: 'Desculpe ocorreu um problema, tente novamente.', botaoText: 'Fechar'})
        this._adicionadoComSucesso = false;
      }
    );
  }
}
