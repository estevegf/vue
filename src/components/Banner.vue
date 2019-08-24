<template>
  <section
    class="banner bar-margin"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="banner-content">
      <h1>@estevegf</h1>
      <p>Hello from my web</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {
    imageUrl: String
  }
};
</script>

<style scoped>
.banner {
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  left: 0;
  right: 0;
}

.banner-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
