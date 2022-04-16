import { App, Plugin } from 'vue';
import Decoration2 from './src/index.vue';

export const Decoration2Plugin: Plugin = {
  install(app: App) {
    app.component('dv-decoration2', Decoration2);
  },
};

export {
  Decoration2,
};
