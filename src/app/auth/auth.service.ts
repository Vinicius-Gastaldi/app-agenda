import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from '../core/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly USUARIOS_ENDPOINT = `${this.API_URL}/usuarios`;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; senha: string }): Observable<boolean> {
    return this.http.get<Usuario[]>(
      `${this.USUARIOS_ENDPOINT}?email=${credentials.email}&senha=${credentials.senha}`
    ).pipe(
      map((users: Usuario[]) => {
        if (users.length > 0) {
          const user = users[0];
          // Store both user data and a mock token
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('jwt', this.generateMockToken(user)); // Add mock token
          return true;
        }
        throw new Error('Credenciais inválidas');
      }),
      catchError(error => {
        console.error('Login failed:', error);
        throw error;
      })
    );
  }

  private generateMockToken(user: Usuario): string {
    // Simple base64 encoding (not secure for production!)
    return btoa(JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt');
  }

  getCurrentUser(): Usuario | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.nivelAcesso === 'admin';
  }
}