import { Story, Meta } from "@storybook/angular";
import { RegistroComponent } from "./registro.component";

export default {
  // Título del componente en Storybook
  title: "Components/Registro", 
  // Componente que se va a probar
  component: RegistroComponent, 
} as Meta;

const Template: Story<RegistroComponent> = (args: RegistroComponent) => ({
  props: args, 
});

export const Default = Template.bind({}); 
Default.args = {}; 
