import { createApp } from "vue";
import Parent from "./Parent.vue";
import { setupGlobalComponents } from "./plugins/component";

export function useAnother() {
  const app = createApp(Parent)
  const container = document.createElement('div');

  if (app) {
    app.use(Element as any);
    setupGlobalComponents(app);

    document.body.appendChild(container);
    app.mount(container);
  }
}