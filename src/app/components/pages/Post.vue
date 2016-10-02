<template>
  <div>
    <h1>PostPage</h1>
    <div v-html="post.body"></div>
  </div>
</template>

<script>
  function loadPostHtml (name, callback) {
    try {
      require([`src/posts/en/${name}.md`], (post) => {
        callback(post)
      })
    } catch (err) {
      callback(err)
    }
  }

  export default {
    name: 'PostPage',
    data () {
      return {
        post: null
      }
    },
    beforeRouteEnter (route, redirect, next) {
      let fileName = route.params.slug

      loadPostHtml(fileName, (post) => {
        next(vm => {
          vm.post = post
        })
      })
    },
    created () {
      let fileName = this.$route.params.slug
      let post

      try {
        post = require(`src/posts/en/${fileName}.md`)
      } catch (e) {
        let errorMessage = `Error: Cannot find '${fileName}.md' post file.`
        post = errorMessage
        console.warn(errorMessage)
      }

      this.post = post

      // webpack HMR markdown
      if (module.hot) {
        module.hot.accept(`src/posts/en/${fileName}.md`)
      }
    },
    watch: {
      $route () {
        let fileName = this.$route.params.slug

        this.post = null

        loadPostHtml(fileName, (post) => {
          this.post = post
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
