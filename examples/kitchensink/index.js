import Vue from 'vue';
import Vuex from 'vuex';
import NekaConfirmPlugin from '@/neka-confirm-plugin';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(NekaConfirmPlugin);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  nkConfirmSettings: new NekaConfirmPlugin(),
  render: createElement => createElement(App)
});
