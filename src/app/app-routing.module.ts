import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { RestablecerComponent } from './restablecer/restablecer.component';

const routes: Routes = [
  // Ruta por defecto redirige a '/registro'
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, 
  // Ruta '/registro' carga el componente RegistroComponent
  { path: 'registro', component: RegistroComponent }, 
  // Ruta '/sesion' carga el componente SesionComponent
  { path: 'sesion', component: SesionComponent }, 
  // Ruta '/restablecer' carga el componente RestablecerComponent
  { path: 'restablecer', component: RestablecerComponent }, 
];

@NgModule({
  // Configura las rutas principales en el enrutador
  imports: [RouterModule.forRoot(routes)], 
  // Exporta el módulo de enrutamiento para su uso en otros módulos

  exports: [RouterModule] 
})
export class AppRoutingModule { }
