<template>
  <div id="app">
    <Nav class="container"/>
    <router-view class="bar-margin container"/>
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

<style>
.bar-margin {
  margin-top: 55px;
}

@media (min-width: 600px) {
  .container {
    padding: 0 4em !important;
  }
}

@media (min-width: 800px) {
  .container {
    padding: 0 8em !important;
  }
}

@media (min-width: 1100px) {
  .container {
    padding: 0 12em !important;
  }
}
</style>
