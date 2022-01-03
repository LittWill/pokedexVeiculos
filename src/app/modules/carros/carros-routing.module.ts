import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCarrosComponent } from './components/lista-carros/lista-carros.component';

const routes: Routes = [
  {
    path: '', component: ListaCarrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCarrosRoutingModule { }
