import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Academics from '../views/Academics.vue'
import Projects from '../views/Projects.vue'
import CS from '../views/CS.vue'
import Theme from '../views/Theme.vue'
import Blogs from '../views/Blogs.vue'
import Misc from '../views/Misc.vue'
import Post from '../views/Post.vue'

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
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    alias: ['/blog', '/posts']
  },
  {
    path: '/misc',
    name: 'Misc',
    component: Misc
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
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
