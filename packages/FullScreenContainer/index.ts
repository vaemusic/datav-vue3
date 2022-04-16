import { App, Plugin } from 'vue';
import FullScreenContainer from './src/index.vue';

export const FullScreenContainerPlugin: Plugin = {
  install(app: App) {
    app.component('dv-full-screen-container', FullScreenContainer);
  },
};

export {
  FullScreenContainer,
};
