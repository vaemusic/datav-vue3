import { App, Plugin } from 'vue';
import BorderBox2 from './src/index.vue';

export const BorderBox2Plugin: Plugin = {
  install(app: App) {
    app.component('dv-border-box2', BorderBox2);
  },
};

export {
  BorderBox2,
};
