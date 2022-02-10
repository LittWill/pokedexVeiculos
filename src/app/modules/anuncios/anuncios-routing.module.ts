import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard.service';
import { AnunciosComponent } from './anuncios.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { NovoAnuncioComponent } from './components/novo-anuncio/novo-anuncio.component';
import { ListaAnunciosComponent } from './components/lista-anuncios/lista-anuncios.component';
import { ListaAnunciosMarcaComponent } from './components/lista-anuncios-marca/lista-anuncios-marca.component';
import { ListaAnunciosUsuarioComponent } from './components/lista-anuncios-usuario/lista-anuncios-usuario.component';
import { ListaAnunciosFiltroComponent } from './components/lista-anuncios-filtro/lista-anuncios-filtro.component';

const routes: Routes = [
  {path: '', component: AnunciosComponent, children: [
    {path: '', component: ListaAnunciosComponent},
    {path: 'marca', component: ListaAnunciosMarcaComponent},
    {path: 'usuario', component: ListaAnunciosUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'filtro', component: ListaAnunciosFiltroComponent},
    {path: 'detalhes', component: DetalhesComponent},
    {path: 'novo-anuncio', component: NovoAnuncioComponent, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
