import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new BehaviorSubject(false);
  
  constructor() { }
  
  open(): void {
    this.isLoading.next(true);
    this.esconderConteudo();
  }

  close(): void {
    setTimeout(() => {
      this.isLoading.next(false);
      this.exibirConteudo();
    }, 2000);
  }

  private esconderConteudo() {
    const wrapper = document.querySelector('.wrapper');
    wrapper?.classList.add('esconder');
  }

  private exibirConteudo() {
    const wrapper = document.querySelector('.wrapper');
    wrapper?.classList.remove('esconder');
  }
}
