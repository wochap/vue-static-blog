<template>
  <div>
    Header
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'Home'}">Home</router-link>
        </li>
        <li v-for="post in posts">
          <router-link :to="{name: 'Post', params: {slug: post.slug}}">{{ post.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import posts from 'app/utils/posts'

  const AppHeader = {
    name: 'HomePage',
    data () {
      return {
        posts
      }
    }
  }

  export default AppHeader
</script>

<style lang="scss">
</style>
