import { Component } from '@angular/core';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.css']
})
export class RestablecerComponent {
  mostrarFormulario: string = 'restablecer';
  email: string = '';

  constructor() {
    this.email = '';
  }

  submitFormRestablecer() {
    // Lógica para enviar el formulario de restablecer contraseña
    console.log('Enviando formulario de restablecer contraseña');
    console.log('Email:', this.email);

    // Restablecimiento de contraseña exitoso
    alert('Se ha enviado un correo electrónico para restablecer la contraseña');

    // Restablecer el campo de correo electrónico
    this.email = '';
  }

  cambiarFormulario(formulario: string) {
    this.mostrarFormulario = formulario;
  }
}

