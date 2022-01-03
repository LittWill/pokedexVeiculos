import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { AnuncioComponent } from './components/anuncio/anuncio.component';


@NgModule({
  declarations: [
    ListaAnunciosComponent,
    AnuncioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AnunciosRoutingModule
  ],
  providers: [AnunciosService],
})
export class AnunciosModule { }
