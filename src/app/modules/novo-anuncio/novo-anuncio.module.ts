import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { NovoAnuncioRoutingModule } from './novo-anuncio-routing.module';
import { NovoAnuncioComponent } from './novo-anuncio.component';




@NgModule({
  declarations: [
    NovoAnuncioComponent,
  ],
  imports: [
    CommonModule,
    NovoAnuncioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class NovoAnuncioModule { }