import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        RegistroComponent,
        SesionComponent,
        RestablecerComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render the registration form when mostrarFormulario is "registro"', () => {
    component.mostrarFormulario = 'registro';
    fixture.detectChanges();

    const registroComponent = fixture.nativeElement.querySelector('app-registro');
    expect(registroComponent).toBeTruthy();
  });

  it('should render the session form when mostrarFormulario is "sesion"', () => {
    component.mostrarFormulario = 'sesion';
    fixture.detectChanges();

    const sesionComponent = fixture.nativeElement.querySelector('app-sesion');
    expect(sesionComponent).toBeTruthy();
  });

  it('should render the reset form when mostrarFormulario is "restablecer"', () => {
    component.mostrarFormulario = 'restablecer';
    fixture.detectChanges();

    const restablecerComponent = fixture.nativeElement.querySelector('app-restablecer');
    expect(restablecerComponent).toBeTruthy();
  });
});
