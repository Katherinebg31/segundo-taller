import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  mostrarFormulario: string = 'registro';
  nombre: string = '';
  email: string = '';
  contrasena: string = '';
  // Variable para rastrear la validez del formulario
  formularioValido: boolean = false; 

  cambiarFormulario(formulario: string) {
    this.mostrarFormulario = formulario;
  }

  submitFormRegistro() {
    console.log('Enviando formulario de registro');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.contrasena);
  }

  // Método para validar el formulario
  validarFormulario() {
    // Verificar si todos los campos requeridos están llenos
    this.formularioValido = this.nombre !== '' && this.email !== '' && this.contrasena !== '';
  }
}

