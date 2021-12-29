import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavegacaoRoutingModule } from './navegacao-routing.module';
import { HomeComponent } from './components/home/home.component';
import { VeiculosService } from 'src/app/services/veiculos.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NavegacaoRoutingModule
  ],
  providers: [VeiculosService],
  exports: [
    HomeComponent,
  ]
})
export class NavegacaoModule { }
