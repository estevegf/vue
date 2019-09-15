<template>
  <div>
    <Banner class="bar-margin" :image-url="homeBanner"></Banner>
    <div class="container">
      <div class="introduction">
        <h1>Who am I?</h1>
        <p>
          I am Esteve Genovard Ferriol. I was born in Mallorca, where I spent my
          childhood. Nowadays, I am a computer engineer graduated in La Salle
          Campus Barcelona, Ramon Llull University, 2014-2018.
        </p>
      </div>
      <section>
        <h2>Experience</h2>
        <div>
          <div class="card l-6">
            <img
              class="circular"
              :src="logoOne"
              width="100"
              alt="experience Funitec La Salle"
            />
            <div>
              <h3>Intership - Funitec</h3>
              <ul>
                <li>Direct contact with suppliers of la Salle</li>
                <li>Electronic university store administration</li>
                <li>Stock managment</li>
              </ul>
            </div>
          </div>

          <div class="card l-6">
            <img
              class="circular"
              :src="logoTwo"
              width="100"
              alt="experience Uniks"
            />
            <div>
              <h3>Frontend Developer - Uniks</h3>
              <ul>
                <li>Website developer: www.uniks.com</li>
                <li>CMS developer</li>
                <li>Facebook application developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: { Banner },
  data() {
    return {
      homeBanner: "/img/banner_home-1920.webp",
      logoOne: "/img/experience-funitec.svg",
      logoTwo: "/img/experience-uniks.svg"
    };
  }
};
</script>

<style>
.card {
  display: inline-flex;
  width: 100%;
  -webkit-box-align: baseline;
  align-items: baseline;
}

.circular {
  margin: 1em 2em auto 1em;
}

@media (max-width: 600px) {
  .circular {
    width: 80px;
  }
}

.introduction p {
  text-align: justify;
}

ul {
  padding-left: 0;
}
</style>
