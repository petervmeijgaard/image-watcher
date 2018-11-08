import Vue from 'vue';
import App from './App.vue';

import './plugins/register-service-worker';
import './plugins/socket-io';

import 'normalize.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
