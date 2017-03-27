import Vue from 'vue';
import App from './App';
import router from './route';
import axios from 'axios';

import '../css/core.css';

Vue.config.debug = true;
Vue.prototype.http = axios;

const app = new Vue({
  router,
  ...App
}).$mount('#app');
