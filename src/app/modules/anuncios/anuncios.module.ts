import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
    AnunciosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AnunciosRoutingModule,
  ],
})
export class AnunciosModule { }
