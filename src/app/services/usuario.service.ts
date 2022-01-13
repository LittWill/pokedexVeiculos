import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpService: HttpService) { }

  listarUsuarios(): Observable<IUsuario[]>{
    return this.httpService.getUsuarios();
  }

  adicionarNovoUsuario(novoUsuario: IUsuario){
    return this.httpService.postNovoUsuario(novoUsuario).subscribe(res => {
      const{statusCode, erros} = res;
      if(statusCode === 201) alert('Novo usuário adicionado com sucesso'); else alert('Erro ao adicionar novo usuário.');
      if(erros.length > 0) console.log('Erros: ', erros);
    });
  }
}
