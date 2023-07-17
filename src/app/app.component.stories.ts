import { Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'Components/App', 
  component: AppComponent, 
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args, 
});

export const Default = Template.bind({}); 
Default.args = {}; 

// Crea una instancia del componente con mostrarFormulario: 'registro'
export const MostrarRegistro = Template.bind({}); 
MostrarRegistro.args = {
  // Proporciona el valor 'registro' para mostrarFormulario
  mostrarFormulario: 'registro', 
};

// Crea una instancia del componente con mostrarFormulario: 'sesion'
export const MostrarSesion = Template.bind({}); 
MostrarSesion.args = {
  // Proporciona el valor 'sesion' para mostrarFormulario
  mostrarFormulario: 'sesion', 
};

// Crea una instancia del componente con mostrarFormulario: 'restablecer'
export const MostrarRestablecer = Template.bind({}); 
MostrarRestablecer.args = {
  // Proporciona el valor 'restablecer' para mostrarFormulario
  mostrarFormulario: 'restablecer', 
};
