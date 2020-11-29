import Vue from 'vue'
import App from './App.vue'
import modules from './modules';

new Vue({
  modules,
  render: h => h(App),
}).$mount('#app')
