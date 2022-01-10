import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendasComponent } from './vendas.component';
import { VendasService } from 'src/app/services/vendas.service';


@NgModule({
  declarations: [
    VendasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VendasRoutingModule
  ],
  providers: [VendasService],
})
export class VendasModule { }
