<template>
  <div id="root">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './layouts/AppHeader'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
</style>
