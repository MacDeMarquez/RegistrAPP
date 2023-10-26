import { Component, OnInit } from '@angular/core';
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
  
}
