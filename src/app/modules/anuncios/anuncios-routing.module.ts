import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';

const routes: Routes = [
  {path: '', component: AnunciosComponent, children: [
    {path: '', component: ListaAnunciosComponent},
    {path: 'detalhes', component: DetalhesComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
