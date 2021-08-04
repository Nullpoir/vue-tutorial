import Vue from 'vue';
import Hello from './vue/hello.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(Hello).$mount('#app');
});