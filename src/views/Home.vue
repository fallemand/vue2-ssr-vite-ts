<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Vite SSR App with vue-server-renderer" />
    <p>Disable javascript and reload the app. The color should be RED if styles are loaded correctly</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from '../components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
/** Home Component */
export default class Home extends Vue {}
</script>

<style>
.home {
  color: red;
}
</style>
