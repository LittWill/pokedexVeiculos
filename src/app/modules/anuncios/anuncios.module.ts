import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { AnunciosService } from 'src/app/services/anuncios.service';


@NgModule({
  declarations: [
    ListaAnunciosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AnunciosRoutingModule
  ],
  providers: [AnunciosService],
})
export class AnunciosModule { }
