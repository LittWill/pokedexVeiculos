import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacaoRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';


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
