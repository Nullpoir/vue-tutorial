import Vue from 'vue';
import Hello from './vue/app.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(Hello).$mount('#app');
});