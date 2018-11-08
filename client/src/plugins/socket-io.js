import Vue from 'vue';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

// Bind the instance of Socket.io to Vue.
Vue.$socket = socket;
Object.defineProperty(Vue.prototype, '$socket', {
  get() {
    return socket;
  },
});
