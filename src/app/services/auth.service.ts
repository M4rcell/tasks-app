import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import * as UserActions from '../store/user.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor(
    private router: Router,
    private store: Store<AppState>,

    ) { }

  login(username: string, password: string): boolean {
    // Simulación de lógica de autenticación
    if (username === 'test01'  && password === 'test01') { 
      const user = {user: username, password: password}
      this.store.dispatch(new UserActions.AddUser(user) )
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
