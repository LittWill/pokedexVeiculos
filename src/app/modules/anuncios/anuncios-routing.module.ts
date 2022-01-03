import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';

const routes: Routes = [
  {path: '', component: ListaAnunciosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
