<template>
<div class="Allinform">
    <v-card v-for="(item, index) in f" :key="index" class="info-card">
       <v-card-title>{{ item.company }} 招聘职位：{{ item.position }}</v-card-title>
        <v-card-subtitle>{{ `【${item.class}】${item.city} `}}</v-card-subtitle>
        <!-- <v-card-text>详细描述</v-card-text> -->
        <v-card-actions>
          <v-btn text small color="primary">了解更多</v-btn>
        </v-card-actions>
      </v-card>
</div>
</template>
<script>
export default {
  name:"Allinform",
  data() {
    return {
      f: [
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "北京",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "山东",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "吉林",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "四川", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "湖北", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "黑龙江", company: "深圳市龙华区教育局",position:"文员"},
        { class:"政法类",city: "江西", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "山东",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "上海",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "四川",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "天津", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "广东",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "山东",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "北京",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "吉林",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "安徽", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "辽宁",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "江苏",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "北京",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "浙江", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "北京",
          company: "深圳市龙华区教育局",position:"文员"
        },
        {
          class:"政法类",city: "北京",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "辽宁", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "江西", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "安徽", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "新疆", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "海南",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "贵州", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "云南", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "河北", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "四川", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "山东", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "云南", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "广东",
         company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "浙江", company: "深圳市龙华区教育局",position:"文员"},
        { class:"政法类",city: "辽宁",company: "深圳市龙华区教育局",position:"文员" },
        {
          class:"政法类",city: "全国",
          company: "深圳市龙华区教育局",position:"文员"
        },
        { class:"政法类",city: "浙江", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "黑龙江", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "辽宁",company: "深圳市龙华区教育局",position:"文员"},
        { class:"政法类",city: "上海", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "广东", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "江苏", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "浙江",company: "深圳市龙华区教育局",position:"文员"},
        { class:"政法类",city: "江苏", company: "深圳市龙华区教育局",position:"文员" },
        { class:"政法类",city: "上海", company: "深圳市龙华区教育局",position:"文员" }
      ]
    };
  }
};
</script>