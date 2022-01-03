import { Component, Input, OnInit } from '@angular/core';
import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  @Input() anuncio!: IAnuncio;
 

  constructor() { }

  ngOnInit(): void {
  }

}
