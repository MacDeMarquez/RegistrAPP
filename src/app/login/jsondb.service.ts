import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsondbService {
  private db = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }
  listado : any = [];
  ramos: any = [];

  getUsers(){
    const url = this.db + 'usuarios';
    this.http.get(url).subscribe((data=[]) => {this.listado = data; });
    return this.listado;
  }

  getRamos(id:string){
    this.ramos = [];
    const url = this.db + 'usuarios/' + id;
    this.http.get(url).subscribe((data=[]) => { this.ramos = data; });
  }

  getRamosByUserId(userId: string) {
    const url = this.db + 'ramos?userid=' + userId;
    return this.http.get(url);
  }
  



}

