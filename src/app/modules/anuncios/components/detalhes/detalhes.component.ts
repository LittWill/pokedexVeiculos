import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ELocalStorageKey } from 'src/app/enums/ELocalStorageKey';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  anuncio: IAnuncio;

  constructor(private router: Router) {
    this.anuncio = this._getLocalStorage();
  }

  ngOnInit(): void {
    if (!this.anuncio) this.voltar();
  }

  voltar() {
    localStorage.removeItem(ELocalStorageKey.ANUNCIO);
    this.router.navigate(['anuncios/todos']);
  }

  private _getLocalStorage(): IAnuncio {
    return JSON.parse(<string>localStorage.getItem(ELocalStorageKey.ANUNCIO));
  }

}
