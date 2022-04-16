import { App, Plugin } from 'vue';
import Decoration1 from './src/index.vue';

export const Decoration1Plugin: Plugin = {
  install(app: App) {
    app.component('dv-decoration1', Decoration1);
  },
};

export {
  Decoration1,
};
