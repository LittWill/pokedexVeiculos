import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-br');

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { AnunciosComponent } from './anuncios.component';



@NgModule({
  declarations: [
    ListaAnunciosComponent,
    AnuncioComponent,
    DetalhesComponent,
    AnunciosComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    AnunciosRoutingModule,
  ],
  providers: [
    {provide:  LOCALE_ID, useValue: 'pt-br'},
  ]
})
export class AnunciosModule { }
