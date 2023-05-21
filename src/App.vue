
<script >
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div>
    <main-component>
      <router-view/>
    </main-component>
  </div>
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
  right: 0%;
  left: 0%;
}

img {
  height: 40px;
  width: 50px;
}
</style>