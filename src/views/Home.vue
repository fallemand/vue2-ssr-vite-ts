<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
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
