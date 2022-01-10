import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoAnuncioComponent } from './novo-anuncio.component';

const routes: Routes = [
  {path: '', component: NovoAnuncioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoAnuncioRoutingModule { }
