import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirNombreService {
  private nombre: string = '';
  constructor() { }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
