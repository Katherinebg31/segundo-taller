import { Meta, Story } from '@storybook/angular';
import { RestablecerComponent } from './restablecer.component';

export default {
  title: 'Components/Restablecer', 
  component: RestablecerComponent, 
  argTypes: {
    email: { control: 'text' }, 
  },
} as Meta;

const Template: Story<RestablecerComponent> = (args: RestablecerComponent) => ({
  props: args, 
});

export const Default = Template.bind({}); 
Default.args = {}; 

// Crea una instancia del componente con un email inicial
export const WithInitialEmail = Template.bind({});
WithInitialEmail.args = {
  // Proporciona un valor inicial para la propiedad 'email'
  email: 'nombre@correo.com', 
};

// Crea una instancia del componente con un error al enviar el formulario
export const ErrorSubmittingForm = Template.bind({}); 
ErrorSubmittingForm.args = {
  // Proporciona un valor inicial para la propiedad 'email'
  email: 'nombre@correo.com', 
};


