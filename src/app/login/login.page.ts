import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsondbService } from './jsondb.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  login: FormGroup;
  constructor(private form:FormBuilder,
    private router:Router,
    private db:JsondbService,
    private toast:ToastController) {
    this.login = this.form.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.login.valid) {
      const usuario =  this.login.get('usuario')?.value;
      const contrasenia =  this.login.get('contrasenia')?.value;
      this.db.obtenerUsuarios().subscribe((data: any) => {
        const users = data.users;
        const user = users.find((x: any) => x.usuario === usuario && x.contrasenia === contrasenia);

        if(user) {
          this.router.navigateByUrl('/menu-inicio');
        } else {
          this.msjError('Usuario y/o contraseña incorrectos')
        }
      });

    }
  }

  ngOnInit() {
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
