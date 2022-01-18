import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Academics from '../views/Academics.vue'
import Projects from '../views/Projects.vue'
import CS from '../views/CS.vue'
import Theme from '../views/Theme.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/academics',
    name: 'Academics',
    component: Academics
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/cs',
    name: 'CS',
    component: CS
  },
  {
    path: '/theme',
    name: 'Theme',
    component: Theme
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
