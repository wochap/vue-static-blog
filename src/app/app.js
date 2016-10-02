import Vue from 'vue'

import Root from './components/Root'
import router from './config/router'

const app = new Vue({
  router,
  ...Root
})

export {app, router}
