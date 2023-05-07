<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';


</script>

<template>
  <header-component class="sticky-top">
    <navbar></navbar>
  </header-component>
  <main-component>
    <RouterView></RouterView>
  </main-component>
</template>

<style scoped>
header-component {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0%;
  right: 0%;
  left: 0%;
}

main-component {
  position: fixed;
  top: 65px;
  right: 0%;
  left: 0%;
}
RouterView{
  position: fixed;
  right: 0%;
  left: 0%;
  display: flex;

}
</style>
