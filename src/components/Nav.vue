<template>
  <div id="nav">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">HOME</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'education' }">EDUCATION</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
ul {
  background: #333;
}

ul a {
  color: white;
}
</style>
