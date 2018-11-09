import Vue from 'vue';
import App from './App.vue';

// Load used plugins...
import './plugins/register-service-worker';
import './plugins/socket-io';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
