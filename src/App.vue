<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>
