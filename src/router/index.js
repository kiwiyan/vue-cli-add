import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/pages/Home.vue'], resolve);
const About = resolve => require(['@/pages/About.vue'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
