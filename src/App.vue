<template>
  <div id="app">
    <header>
      <Nav class="container" />
    </header>
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

<style>
body {
  margin: 0;
}

.bar-margin {
  margin-top: 50px;
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

@media (min-width: 1300px) {
  .container {
    padding: 0 14em !important;
  }
}

@media (min-width: 1200px) {
  .l-6 {
    width: 50% !important;
  }
}
</style>
