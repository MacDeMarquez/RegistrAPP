import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsondbService {
  private db = 'http://localhost:3000/usuario';
  constructor(private http:HttpClient) { }

  obtenerUsuarios(){
    return this.http.get(this.db);
  }

}
