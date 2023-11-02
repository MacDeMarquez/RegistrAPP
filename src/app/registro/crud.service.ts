import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage:Storage) { this.storage.create(); }

  async guardar(id:string, valor:any){
    await this.storage.set(id,valor);
  }
}
