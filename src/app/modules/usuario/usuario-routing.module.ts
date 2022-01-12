import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {path: '', component: UsuarioComponent, children: [
    {
      path: 'novo-usuario', component: NovoUsuarioComponent,
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
