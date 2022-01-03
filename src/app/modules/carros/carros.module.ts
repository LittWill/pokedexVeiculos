import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListaCarrosRoutingModule } from './carros-routing.module';
import { CarrosService } from 'src/app/services/carros.service';
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
  providers: [CarrosService],
})
export class ListaCarrosModule { }
