import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  anuncio: IAnuncio;

  constructor(private router: Router) { 
    this.anuncio = this.getLocalStorage();
  }

  ngOnInit(): void {
    if(!this.anuncio) this.voltar();
  }

  voltar() {
    localStorage.removeItem('ANUNCIO');
    this.router.navigate(['anuncios']);
  }

  private getLocalStorage(): IAnuncio {
    return JSON.parse(<string>localStorage.getItem('ANUNCIO'));
  }

}
