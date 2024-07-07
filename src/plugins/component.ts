import { App } from 'vue'
import Depend from '../Depend.vue'

export function setupGlobalComponents(app: App) {
  app.component('Depend', Depend)
}