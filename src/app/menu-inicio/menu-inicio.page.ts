import { Component, OnInit } from '@angular/core';
import { JsondbService } from '../login/jsondb.service';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.page.html',
  styleUrls: ['./menu-inicio.page.scss'],
})
export class MenuInicioPage implements OnInit {
  constructor(private db:JsondbService) { }
    users : any = [];
    
    ngOnInit() {
      this.listar();
    }
  
    listar()
    {
      this.db.getUsers();
      this.users = this.db.listado;
    }

    
  }


