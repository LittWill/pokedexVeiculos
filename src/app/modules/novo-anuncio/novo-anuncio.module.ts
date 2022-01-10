import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoAnuncioRoutingModule } from './novo-anuncio-routing.module';
import { NovoAnuncioComponent } from './novo-anuncio.component';


@NgModule({
  declarations: [
    NovoAnuncioComponent,
  ],
  imports: [
    CommonModule,
    NovoAnuncioRoutingModule
  ]
})
export class NovoAnuncioModule { }
