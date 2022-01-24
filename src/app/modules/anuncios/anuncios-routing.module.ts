import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard.service';
import { AnunciosComponent } from './anuncios.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { NovoAnuncioComponent } from './components/novo-anuncio/novo-anuncio.component';

const routes: Routes = [
  {path: '', component: AnunciosComponent, children: [
    {path: '', component: ListaAnunciosComponent},
    {path: 'detalhes', component: DetalhesComponent},
    {path: 'novo-anuncio', component: NovoAnuncioComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
