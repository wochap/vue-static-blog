import Home from 'app/components/pages/Home.vue'
import Post from 'app/components/pages/Post.vue'
import NotFound from 'app/components/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/posts/:slug',
    name: 'Post',
    component: Post
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

export default routes
