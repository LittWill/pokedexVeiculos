import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { IAnuncio } from 'src/app/interfaces/IAnuncio';

@Component({
  selector: 'app-detalhes-editar',
  templateUrl: './detalhes-editar.component.html',
  styleUrls: ['./detalhes-editar.component.scss']
})
export class DetalhesEditarComponent implements OnInit {
  anuncio!: IAnuncio;
  formulario: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      preco: [null, [Validators.required,]],
      km: [null, [Validators.required,]],
    });
   }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => JSON.parse(params.anuncio)),
      )
      .subscribe(anuncio => {
        this.anuncio = anuncio;
      },
        () => {

        }
      );
  }

  voltar(): void {
    this.router.navigate(['anuncios/usuario']);
  }
}
