import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3028bb71 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _1fdb520d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _70158b4c = () => interopDefault(import('../pages/page/_uid.vue' /* webpackChunkName: "pages/page/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _3028bb71,
    name: "prismic-preview___en"
  }, {
    path: "/fr/",
    component: _1fdb520d,
    name: "index___fr"
  }, {
    path: "/fr/preview",
    component: _3028bb71,
    name: "prismic-preview___fr"
  }, {
    path: "/fr/page/:uid?",
    component: _70158b4c,
    name: "page-uid___fr"
  }, {
    path: "/page/:uid?",
    component: _70158b4c,
    name: "page-uid___en"
  }, {
    path: "/",
    component: _1fdb520d,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
