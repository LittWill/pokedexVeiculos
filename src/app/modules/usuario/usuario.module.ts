import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { IConfig, NgxMaskModule } from 'ngx-mask';

import { UsuarioComponent } from './usuario.component';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';
import { MatIconModule } from '@angular/material/icon';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    UsuarioComponent,
    NovoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
  ]
})
export class UsuarioModule { }
