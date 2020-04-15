<template>
  <div class="home">
    <!-- 轮播窗口 -->
    <v-carousel
      cycle
      progress
      progress-color="white"
      height="200"
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- 今日推荐 -->
    <v-container>
      <h1>今日推荐</h1>
      <Inform ref="mychild" ></Inform>
    </v-container>
  </div>
</template>


<script>
import Inform from "../components/Inform";
export default {
  name: "Home",
  components: {
    Inform,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  }
};
</script>
