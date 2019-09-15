<template>
  <div>
    <Banner class="bar-margin" :image-url="educationBanner"></Banner>
    <div class="container">
      <h1>Education</h1>
      <section class="center">
        <Card
          v-for="(edu, index) in education"
          :key="index"
          :education="edu"
        ></Card>
      </section>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default {
  components: { Card, Banner },
  data() {
    return {
      education: [],
      educationBanner: "/img/banner_education-1920.webp"
    };
  },
  created() {
    ApiService.getInfo()
      .then(response => {
        this.education = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
