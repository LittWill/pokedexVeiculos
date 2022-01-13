import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAnuncio } from '../interfaces/IAnuncio';
import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private token = '';

  constructor(private http: HttpClient) { }

  private sendAuthorizationToken() {
    this.token = <string>localStorage.getItem('TOKEN');
    console.log(this.token);
    return new HttpHeaders().set('Authorization', this.token);
  }

  getAnuncios(): Observable<IAnuncio[]>{
    return this.http.get<IAnuncio[]>('https://pokedex-veiculos.herokuapp.com/anuncios');
  }

  postNovoAnuncio(novoAnuncio: any): Observable<any>{
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/anuncios', novoAnuncio, {headers: this.sendAuthorizationToken()});
  }

  postLogin(credenciais: ICredenciaisDeAcesso): Observable<any>{
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/auth', credenciais);
  }

  getUsuarios(): Observable<any>{
    return this.http.get<any>('https://pokedex-veiculos.herokuapp.com/usuarios');
  }

  postNovoUsuario(novoUsuario: IUsuario): Observable<any>{
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/usuarios', novoUsuario);
  }
}
