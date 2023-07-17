import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
module.exports = {
  stories: ['../src/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: true
  }
};