import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ELocalStorageKey } from '../enums/ELocalStorageKey';

import { IAnuncio } from '../interfaces/IAnuncio';
import { ICredenciaisDeAcesso } from '../interfaces/ICredenciaisDeAcesso';
import { IMarca } from '../interfaces/IMarca';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _url = 'https://pokedex-veiculos.herokuapp.com';
  private _token = '';

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<IAnuncio[]> {
    return this.http.get<IAnuncio[]>(`${this._url}/anuncios`)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  getAnunciosPorMarca(marcaId: number): Observable<IAnuncio[]> {
    return this.http.get<IAnuncio[]>(`${this._url}/anuncios/marca/${marcaId}`)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  getAnunciosPorUsuario(): Observable<IAnuncio[]> {
    return this.http.get<IAnuncio[]>(`${this._url}/anuncios/me`, { headers: this._sendAuthorizationToken() })
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  getAnunciosFiltrados(pesquisa: string): Observable<IAnuncio[]> {
    return this.http.get<IAnuncio[]>(`${this._url}/anuncios/search?busca=${pesquisa}`)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  postNovoAnuncio(novoAnuncio: any): Observable<any> {
    return this.http.post<any>(`${this._url}/anuncios`, novoAnuncio, { headers: this._sendAuthorizationToken() })
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  postImagemNovoAnuncio(file: FormData): Observable<any> {
    return this.http.post<FormData>(`${this._url}/anuncios/imagem`, file, { headers: this._sendAuthorizationToken() })
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  getMarcas(): Observable<IMarca[]> {
    return this.http.get<IMarca[]>(`${this._url}/marcas`)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  postLogin(credenciais: ICredenciaisDeAcesso): Observable<any> {
    return this.http.post<any>(`${this._url}/auth`, credenciais)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this._url}/usuarios`)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  postNovoUsuario(novoUsuario: IUsuario): Observable<any> {
    return this.http.post<any>(`${this._url}/usuarios`, novoUsuario)
      .pipe(
        retry(2),
        catchError(this._handleError)
      );
  }

  private _sendAuthorizationToken(): HttpHeaders {
    this._token = <string>localStorage.getItem(ELocalStorageKey.TOKEN);
    return new HttpHeaders().set('Authorization', this._token);
  }

  private _handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent)// Erro ocorreu no lado do client
      errorMessage = error.error.message;
    else  // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;

    // console.log(errorMessage);
    return throwError({ status: error.status, mensagem: errorMessage });
  }
}
