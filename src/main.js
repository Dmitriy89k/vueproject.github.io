import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router.js';
import store from './store/index.js';

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
