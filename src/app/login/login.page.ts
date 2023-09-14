import { Component, OnInit } from '@angular/core';
import { CompartirNombreService } from '../compartir-nombre.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre = '';
  constructor(private nombreService: CompartirNombreService) { }

  ngOnInit() {
  }
  guardarNombre() {
    this.nombreService.setNombre(this.nombre);
  }
  
}
