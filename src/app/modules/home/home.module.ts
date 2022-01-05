import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacaoRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NavegacaoRoutingModule
  ],
})
export class NavegacaoModule { }
