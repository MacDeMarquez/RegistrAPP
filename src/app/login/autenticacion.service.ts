import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private users: any[] = [];

  constructor(private http: HttpClient) {
    // Cargar los usuarios desde el servicio JsondbService en el constructor
    this.loadUsers();
  }

  private loadUsers() {
    this.http.get('http://localhost:3000/usuarios').subscribe((data: any) => {
      this.users = data; // Cargar los usuarios desde la respuesta del servicio
    });
  }

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find((x) => x.usuario === username && x.contrasenia === password);
    return of(!!user); // Devuelve true si el usuario se encuentra, false de lo contrario
  }
}
