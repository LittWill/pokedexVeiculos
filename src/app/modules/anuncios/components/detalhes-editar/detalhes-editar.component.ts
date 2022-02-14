import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
