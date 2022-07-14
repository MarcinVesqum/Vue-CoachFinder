import { createApp } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

import router from './router.js'
import store from './store/index.js';
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App)


app.use(store);
app.component('router-view', RouterView);
app.component('router-link', RouterLink);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.mount('#app');
