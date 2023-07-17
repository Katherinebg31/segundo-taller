import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    SesionComponent,
    RestablecerComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
