import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListaCarrosRoutingModule } from './lista-carros-routing.module';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { ListaCarrosComponent } from './components/lista-carros/lista-carros.component';


@NgModule({
  declarations: [
    ListaCarrosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListaCarrosRoutingModule
  ],
  providers: [VeiculosService],
})
export class ListaCarrosModule { }
