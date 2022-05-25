<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-link :to="{ name: 'TestPage', params: { id: randomPage } }">link</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  computed: {
    randomPage() {
      return Math.floor(Math.floor(Math.random(1) * 10));
    }
  }
}
</script>
