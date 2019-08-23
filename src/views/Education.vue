<template>
  <div>
    <h1>Hello Education Vue</h1>
    <p>Vue have {{ stars }} stars on github</p>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
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
