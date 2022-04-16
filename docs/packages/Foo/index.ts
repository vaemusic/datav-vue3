import { App, Plugin } from 'vue';
import Foo from './src/index.vue';

export const FooPlugin: Plugin = {
  install(app: App) {
    app.component('dv-foo', Foo);
  },
};

export {
  Foo,
};
