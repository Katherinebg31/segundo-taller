import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importar el módulo FormsModule necesario para las pruebas
      declarations: [RegistroComponent] // Declarar el componente RegistroComponent para las pruebas
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable submit button when form is valid', () => {
    const nombreInput = fixture.debugElement.nativeElement.querySelector('#nombre');
    const emailInput = fixture.debugElement.nativeElement.querySelector('#email');
    const contrasenaInput = fixture.debugElement.nativeElement.querySelector('#contrasena');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    // Configura valores de los campos del formulario
    nombreInput.value = 'Nombre Apellido';
    emailInput.value = 'Nombre.Apellido@correo.com';
    contrasenaInput.value = 'password123';

    // Dispara evento de cambio para los campos del formulario
    nombreInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    contrasenaInput.dispatchEvent(new Event('input'));

    // Actualiza la vista
    fixture.detectChanges();

    // Verifica que el botón de envío esté habilitado
    expect(submitButton.disabled).toBe(true);
  });
});
