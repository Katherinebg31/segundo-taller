import { Component } from '@angular/core';

@Component({
  selector: 'app-sesion', 
  templateUrl: './sesion.component.html', 
  styleUrls: ['./sesion.component.css'] 
})
export class SesionComponent {
  mostrarFormulario: string = 'sesion'; 
  email: string = ''; 
  contrasena: string = ''; 

  cambiarFormulario(formulario: string) {
    // Cambiar el formulario a mostrar
    this.mostrarFormulario = formulario; 
  }

  submitFormInicioSesion() {
    console.log('Formulario enviado'); 
    console.log('Email:', this.email); 
    console.log('Contraseña:', this.contrasena); 
  }
}

