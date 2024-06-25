import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import FocusTrap from 'primevue/focustrap';
import Ripple from 'primevue/ripple'
import AnimateOnScroll from 'primevue/animateonscroll';
import Tooltip from 'primevue/tooltip';
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()
const head = createHead();
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(head)
app.use(PrimeVue, { ripple: true })
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);

app.mount('#app')