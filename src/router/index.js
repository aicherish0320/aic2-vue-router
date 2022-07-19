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
        name: 'A',
        component: {
          render(h) {
            return <h1>About A</h1>
          }
        }
      },
      {
        path: 'b',
        name: 'B',
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

router.beforeEach((from, to, next) => {
  console.log(1)
  next()
})

router.beforeEach((from, to, next) => {
  console.log('2 >>> ')
  next()
})

export default router
