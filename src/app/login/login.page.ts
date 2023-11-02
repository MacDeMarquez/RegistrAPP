import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AutenticacionService } from './autenticacion.service';
import { JsondbService } from './jsondb.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  logoapp: string = './assets/img/logoapp.png';
  login: FormGroup;
  usuarios : any;
  constructor(private form:FormBuilder,
    private db:JsondbService,
    private router:Router,
    private toast:ToastController,
    private autenticacion:AutenticacionService) {
    this.login = this.form.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.login.valid) {
      const username = this.login.get('usuario')?.value;
      const password = this.login.get('contrasenia')?.value;
      

      this.autenticacion.login(username, password).subscribe((autenticado) => {
        if (autenticado) {
          this.router.navigate(['/menu-inicio/']);
        } else {
          this.msjError('Usuario y/o contraseña incorrectos');
        }
      });
    }
  }

  ngOnInit(){

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
