import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    return new HttpHeaders().set('Authorization', this.token);
  }

  getAnuncios(): Observable<IAnuncio[]> {
    return this.http.get<IAnuncio[]>('https://pokedex-veiculos.herokuapp.com/anuncios')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postNovoAnuncio(novoAnuncio: any): Observable<any> {
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/anuncios', novoAnuncio, { headers: this.sendAuthorizationToken() })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postLogin(credenciais: ICredenciaisDeAcesso): Observable<any> {
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/auth', credenciais)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>('https://pokedex-veiculos.herokuapp.com/usuarios')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postNovoUsuario(novoUsuario: IUsuario): Observable<any> {
    return this.http.post<any>('https://pokedex-veiculos.herokuapp.com/usuarios', novoUsuario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent)// Erro ocorreu no lado do client
      errorMessage = error.error.message;
    else  // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;

    // console.log(errorMessage);
    return throwError({status: error.status, mensagem: errorMessage});
  }
}
