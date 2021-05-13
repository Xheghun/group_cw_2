import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

import UserComponent from './components/UserComponent.vue';
import LessonComponent from './components/LessonComponent.vue';

const routes = [
  {
    name: 'lesson',
    path: '/',
    component: LessonComponent,
  },
  {
    name: 'user',
    path: '/user',
    component: UserComponent,
  },
  {
    name: 'lesson',
    path: '/lesson',
    component: LessonComponent,
  }
];


const router = new VueRouter({mode: 'history', routes: routes});

new Vue(Vue.util.extend({router}, App)).$mount('#app');
