import { Story, Meta } from "@storybook/angular";
import { SesionComponent } from "./sesion.component";

export default {
  title: "Components/Sesion", 
  component: SesionComponent,
  argTypes: {
    email: { control: "text" }, 
  },
} as Meta;

const Template: Story<SesionComponent> = (args: SesionComponent) => ({
  props: args, 
});

// Crea una instancia del componente usando el Template
export const Default = Template.bind({}); 
Default.args = {}; 

// Crea una instancia del componente con un email inicial
export const WithInitialEmail = Template.bind({}); 
WithInitialEmail.args = {
  // Proporciona un valor inicial para la propiedad 'email'
  email: "nombre@correo.com", 
};
