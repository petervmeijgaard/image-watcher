import Vue from 'vue';
import io from 'socket.io-client';

const { VUE_APP_SERVER_HOST, VUE_APP_SERVER_PORT } = process.env;
const socket = io(`${VUE_APP_SERVER_HOST}:${VUE_APP_SERVER_PORT}`);

// Bind the instance of Socket.io to Vue.
Vue.$socket = socket;
Object.defineProperty(Vue.prototype, '$socket', {
  get() {
    return socket;
  },
});
