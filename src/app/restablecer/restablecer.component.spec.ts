import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RestablecerComponent } from './restablecer.component';

describe('RestablecerComponent', () => {
  let component: RestablecerComponent;
  let fixture: ComponentFixture<RestablecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RestablecerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Verifica que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });

  it('should reset email field after submitting the form', () => {
    // Establece el valor del campo de correo electrónico
    component.email = 'Nombre@correo.com';

    // Desencadena el evento de envío del formulario
    component.submitFormRestablecer();

    // Verifica si el campo de correo electrónico se ha restablecido
    expect(component.email).toBe('');
  });

  it('should display a success message after submitting the form', () => {
    // Espia el método console.log()
    spyOn(console, 'log');

    // Espia el método alert()
    spyOn(window, 'alert');

    // Establece el valor del campo de correo electrónico
    component.email = 'Nombre@correo.com';

    // Desencadena el evento de envío del formulario
    component.submitFormRestablecer();

    // Verifica si el método console.log() fue llamado con el mensaje correcto
    expect(console.log).toHaveBeenCalledWith('Enviando formulario de restablecer contraseña');
    expect(console.log).toHaveBeenCalledWith('Email:', 'Nombre@correo.com');

    // Verifica si el método alert() fue llamado con el mensaje de éxito
    expect(window.alert).toHaveBeenCalledWith('Se ha enviado un correo electrónico para restablecer la contraseña');
  });
});
