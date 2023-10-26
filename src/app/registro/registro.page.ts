import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  alumno: any = [];
  constructor(private crud:CrudService,
    private toast:ToastController) { }
  
  ngOnInit() {
    
  }

  async guardar() {
    if(!this.alumno.nombre)
      this.msjError('Falta el nombre');
    else if (this.alumno.apellido)
      this.msjError('Falta el apellido');
    else if (this.alumno.correo)
      this.msjError('Falta el correo');
    else if (this.alumno.usuario)
      this.msjError('Falta el nombre de usuario');
    else if (this.alumno.contrasenia)
      this.msjError('Falta la contraseña');
    else{
      this.crud.guardar(this.alumno.usuario, this.alumno);
      this.msjExito('Cuenta creada');
      this.alumno = [];
    }
  }

  async msjExito(mensaje:string){
    const t = await this.toast.create({
      message : mensaje,
      color   : 'success',
      icon    : 'checkmark-circle-outline',
      duration: 3500,
      buttons : ['Aceptar']
    });
    t.present();
  }

  async msjError(mensaje:string){
    const t = await this.toast.create({
      message : mensaje,
      color   : 'danger',
      icon    : 'alert-outline',
      duration: 3500,
      buttons : ['Aceptar']
    });
    t.present();
  }
}
