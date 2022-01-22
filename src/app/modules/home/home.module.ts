import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacaoRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


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
