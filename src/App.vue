<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  },
  components: {
  },
  async mounted () {
    this.axios.get('/user/login').then((res) => {
        this.res = res
    })
    
  }
}
</script>

<style>

</style>
