import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading$ = new BehaviorSubject(false);
  
  constructor() { }
  
  exibir(): void {
    this.isLoading$.next(true);
    this.esconderConteudo();
  }

  esconder(): void {
    this.isLoading$.next(false);
    this.exibirConteudo();
  }

  private esconderConteudo(): void {
    const wrapper = document.querySelector('.wrapper');
    wrapper?.classList.add('esconder');
  }

  private exibirConteudo(): void {
    const wrapper = document.querySelector('.wrapper');
    wrapper?.classList.remove('esconder');
  }
}
