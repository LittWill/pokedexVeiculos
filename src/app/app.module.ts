import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './modules/navegacao/navegacao.module';
import { VeiculosService } from './services/veiculos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
