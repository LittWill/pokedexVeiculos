import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAnuncio } from '../interfaces/IAnuncio';
import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<IAnuncio[]>{
    return this.http.get<IAnuncio[]>('https://pokedex-veiculos.herokuapp.com/anuncios');
  }

  postNovoAnuncio(novoAnuncio: IAnuncio): Observable<any>{
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/anuncios', novoAnuncio);
  }

  postLogin(credenciais: ICredenciaisDeAcesso): Observable<string>{
    return this.http.post<string>('https://pokedex-veiculos.herokuapp.com/auth', credenciais);
  }

  getUsuarios(): Observable<any>{
    return this.http.get<any>('https://pokedex-veiculos.herokuapp.com/usuarios');
  }

  postNovoUsuario(novoUsuario: IUsuario): Observable<any>{
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/usuarios', novoUsuario);
  }
}
