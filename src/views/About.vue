<template>
  <div class="about">
    <v-container>
      <h1>分享你的就业资讯</h1>
      <v-text-field label="请输入网址" solo color="white" background-color="white"></v-text-field>
      <p>信息创造竞争力</p>
    </v-container>
  </div>
</template>
<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column ;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  height: 100%;
  background-color: #e74c3c;
  animation: bg-color 10s infinite;
  -webkit-animation: bg-color 10s infinite;
}
@-webkit-keyframes bg-color {
  0% {
    background-color: #e74c3c;
  }
  20% {
    background-color: #f1c40f;
  }
  40% {
    background-color: #1abc9c;
  }
  60% {
    background-color: #3498db;
  }
  80% {
    background-color: #9b59b6;
  }
  100% {
    background-color: #e74c3c;
  }
}
@keyframes bg-color {
  0% {
    background-color: #e74c3c;
  }
  20% {
    background-color: #f1c40f;
  }
  40% {
    background-color: #1abc9c;
  }
  60% {
    background-color: #3498db;
  }
  80% {
    background-color: #9b59b6;
  }
  100% {
    background-color: #e74c3c;
  }
}
</style>