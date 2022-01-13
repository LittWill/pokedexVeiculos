import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-br');

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { AnunciosComponent } from './anuncios.component';
import { NovoAnuncioComponent } from './components/novo-anuncio/novo-anuncio.component';



@NgModule({
  declarations: [
    ListaAnunciosComponent,
    AnuncioComponent,
    DetalhesComponent,
    AnunciosComponent,
    NovoAnuncioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMatFileInputModule,
    AnunciosRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ]
})
export class AnunciosModule { }
