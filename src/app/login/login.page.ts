import { Component, OnInit } from '@angular/core';
import { CompartirNombreService } from '../compartir-nombre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  nombreForm: FormGroup; // Creamos un FormGroup para el formulario
  nombre= '';
  constructor(
    private nombreService: CompartirNombreService,
    private formBuilder: FormBuilder // Inyectamos FormBuilder
  ) {
    // Configuramos el formulario y añadimos la validación
    this.nombreForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }


  guardarNombre() {
    this.nombreService.setNombre(this.nombre);
  }
  
  onSumbit() {
    // Validamos el formulario antes de guardar el nombre
    if (this.nombreForm.valid) {
      // Si el formulario es válido, guardamos el nombre
      this.nombreService.setNombre(this.nombreForm.value.nombre); //OJO CON ESTO NO SÉ SI ESTÁ BIEN
    } else {
      // Si el formulario no es válido, puedes manejar el error aquí
      // Por ejemplo, mostrar un mensaje de error al usuario
      console.log('Formulario no válido'); //NO DEBERÍA DEJAR AVANZAR.
    }
  }
}
