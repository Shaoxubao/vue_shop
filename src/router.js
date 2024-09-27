import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginCom from './components/LoginCom.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginCom }
  ]
})
