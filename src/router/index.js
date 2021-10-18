import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Budget from '@/views/Budget'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/budget',
    name: 'budget',
    component: Budget
  }
]

const router = new VueRouter({
  routes
})

export default router
