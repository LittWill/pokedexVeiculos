import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { NavegacaoRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MarcasComponent } from './components/marcas/marcas.component';


@NgModule({
  declarations: [
    HomeComponent,
    MarcasComponent,
  ],
  imports: [
    CommonModule,
    NavegacaoRoutingModule,
    MatIconModule,
  ],
})
export class NavegacaoModule { }
