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
import { DetalhesEditarComponent } from './components/detalhes-editar/detalhes-editar.component';
import { AnuncioEditarComponent } from './components/anuncio-editar/anuncio-editar.component';

const routes: Routes = [
  {path: '', component: AnunciosComponent, children: [
    {path: 'todos', component: ListaAnunciosComponent},
    {path: 'marca', component: ListaAnunciosMarcaComponent},
    {path: 'usuario', component: ListaAnunciosUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'filtro/:pesquisa', component: ListaAnunciosFiltroComponent},
    {path: 'detalhes', component: DetalhesComponent},
    {path: 'editar/:anuncio', component: AnuncioEditarComponent, canActivate: [AuthGuard]},
    {path: 'detalhes', component: DetalhesEditarComponent, canActivate: [AuthGuard]},
    {path: 'novo-anuncio', component: NovoAnuncioComponent, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
