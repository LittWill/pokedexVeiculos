import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  estaLogado = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.loginService.usuarioEstaLogado.subscribe(estaLogado => {
      if (!estaLogado) {
        this.estaLogado = false;
        this.router.navigate(['/login']);
        return;
      }

      this.estaLogado = true;
    })
    return this.estaLogado;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.loginService.usuarioEstaLogado.value) return false;

    this.router.navigate(['/login']);

    return true;
  }
}
