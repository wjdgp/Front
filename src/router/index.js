import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/test-event',
    component: () => import('../views/TestEvent.vue')
  },
  {
    path: '/test-computed',
    component: () => import('../views/TestComputed.vue')
  },
  {
    path: '/test-condition',
    component: () => import('../views/TestCondition.vue')
  },
  {
    path: '/test-loop',
    component: () => import('../views/TestLoop.vue')
  },
  {
    path: '/test-mixin',
    component: () => import('../views/TestMixin.vue')
  },
  {
    path: '/test-bootstrap',
    component: () => import('../views/TestBootstrap.vue')
  },
  {
    path: '/test-family/props',
    component: () => import('../views/family/props/Parent.vue')
  },
  {
    path: '/test-family/emit',
    component: () => import('../views/family/emit/Parent.vue')
  },
  {
    path: '/test-family/event-bus',
    component: () => import('../views/family/eventBus/Parent.vue')
  },
  {
    path: '/test-user/list',
    component: () => import('../views/user/UserList.vue')
  },
  {
    path: '/test-user/info',
    component: () => import('../views/user/UserInfo.vue')
  },
  {
    path: '/test-socket',
    component: () => import('../views/TestSocket.vue')
  },
  {
    path: '/test-comp',
    component: () => import('../views/comp')
  },
  {
    path: '/test-family2/props2',
    component: () => import('../views/family2/props2/Parent.vue')
  },
  {
    path: '/test-family2/emit',
    component: () => import('../views/family2/emit/Parent.vue')
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
