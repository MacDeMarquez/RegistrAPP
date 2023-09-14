import { Component, OnInit } from '@angular/core';
import { CompartirNombreService } from '../compartir-nombre.service';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.page.html',
  styleUrls: ['./menu-inicio.page.scss'],
})
export class MenuInicioPage implements OnInit {
  nombre: string = '';
  constructor(public nombreService: CompartirNombreService) { }

  ngOnInit() {
    this.nombre = this.nombreService.getNombre();
  }

}
