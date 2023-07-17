import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './sesion.component';

describe('SesionComponent', () => {
  let component: SesionComponent;
  let fixture: ComponentFixture<SesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SesionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Verifica que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });

  it('should log form submission with email and password', () => {
    // Espia el método console.log()
    spyOn(console, 'log');

    // Establece los valores de email y contraseña
    component.email = 'Nombre@correo.com';
    component.contrasena = 'password123';

    // Desencadena el evento de envío del formulario
    component.submitFormInicioSesion();

    // Verifica si el método console.log() fue llamado con los valores correctos
    expect(console.log).toHaveBeenCalledWith('Formulario enviado');
    expect(console.log).toHaveBeenCalledWith('Email:', 'Nombre@correo.com');
    expect(console.log).toHaveBeenCalledWith('Contraseña:', 'password123');
  });
});
