import { Component, OnInit } from '@angular/core';
import { JsondbService } from '../login/jsondb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.page.html',
  styleUrls: ['./menu-inicio.page.scss'],
})
export class MenuInicioPage implements OnInit {
  constructor(private db:JsondbService,
    private router:Router) { }
    users : any = [];
    
    ngOnInit() {
      this.listar();
    }

    onClick(){
      this.router.navigate(['/qrasistencia'])
    }
  
    listar()
    {
      this.db.getUsers();
      this.users = this.db.listado;
    }

    
  }


