import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
// import Navbar from '@/components/Navbar'

Vue.use(Router)

// Routes are added here
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
