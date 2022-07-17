import Vue from 'vue'
import VueRouter from '../vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: 'a',
        component: {
          render(h) {
            return <h1>About A</h1>
          }
        }
      },
      {
        path: 'b',
        component: {
          render(h) {
            return <h1>About B</h1>
          }
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
