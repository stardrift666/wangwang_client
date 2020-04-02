<template>
  <v-bottom-navigation v-model="bottomNav" color="blue" grow app>
    <v-btn value="home" @click="toRouter('/')">
      <span>今日</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn value="alljobs" @click="toRouter('/alljobs')">
      <span>全部</span>
      <v-icon>view_day</v-icon>
    </v-btn>

    <v-btn value="about" @click="toRouter('/about')">
      <span>关于</span>
      <v-icon>share</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name:"Tabbar",
  methods: {
    toRouter(path){
      this.$router.push(path)
    }
  },
  data() {
    return {
      bottomNav: "home"
    };
  }
};
</script>