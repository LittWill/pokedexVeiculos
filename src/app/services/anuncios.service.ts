import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAnuncio } from '../interfaces/IAnuncio';
import { IUsuario } from '../interfaces/IUsuario';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private httpService: HttpService) { }

  listar(): Observable<IAnuncio[]> {
    return this.httpService.getAnuncios();
  }

  adicionar(novoAnuncio: any) {
    this.httpService.postNovoAnuncio(novoAnuncio).subscribe(res => console.log(res));
  }

  upload(files: any) {
    console.log(files);
    
    
    
   
    // files = {
    //   teste: 'teste'
    // }
    this.httpService.postImagem(files).subscribe(res => console.log(res));
  }

 

  
}
