import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

import UserComponent from './components/UserComponent.vue';
import LessonComponent from './components/LessonComponent.vue';

const routes = [
  {
    name: 'lessons',
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
    path: '/lessons',
    component: LessonComponent,
  }
];


const router = new VueRouter({mode: 'history', routes: routes});

new Vue(Vue.util.extend({router}, App)).$mount('#app');
