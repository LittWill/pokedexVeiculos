import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.NavegacaoModule),
  },
  {
    path: 'vendas',
    loadChildren: () => import('./modules/vendas/vendas.module').then(m => m.VendasModule),
  },
  {
    path: 'anuncios',
    loadChildren: () => import('./modules/anuncios/anuncios.module').then(m => m.AnunciosModule),
  },
  {
    path: 'novo-usuario',
    loadChildren: () => import('./modules/novo-usuario/novo-usuario.module').then(m => m.NovoUsuarioModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
