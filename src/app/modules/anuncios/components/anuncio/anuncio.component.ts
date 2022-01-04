import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  @Input() anuncio!: IAnuncio;
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirDetalhes(anuncio: IAnuncio): void {
    console.log(anuncio);
    this.router.navigate(['anuncios/detalhes', anuncio]);
    
  }

}
