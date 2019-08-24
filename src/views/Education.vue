<template>
  <div>
    <Banner class="bar-margin" image-url="/img/banner.svg"></Banner>
    <div class="container">
      <h1>Hello Education Vue</h1>
      <p>Vue have {{ stars }} stars on github</p>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
import Banner from "../components/Banner";

export default {
  components: { Banner },
  data() {
    return {
      stars: ""
    };
  },
  created() {
    ApiService.getInfo()
      .then(response => {
        console.log(response.data);
        this.stars = response.data.stargazers_count;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
