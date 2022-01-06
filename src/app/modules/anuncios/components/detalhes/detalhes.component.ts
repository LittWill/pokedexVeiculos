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
    const anuncio = <string>localStorage.getItem('ANUNCIO');
    this.anuncio = JSON.parse(anuncio);
  }

  ngOnInit(): void {
    
  }

  voltar() {
    localStorage.removeItem('ANUNCIO');
    this.router.navigate(['anuncios']);
  }

}
