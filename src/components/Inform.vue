<template>
  <div class="Inform">
    <v-card v-for="(item, index) in items" :key="index" class="info-card">
      <v-card-title>{{ item.companyname }} 招聘职位：{{ item.jobname }}</v-card-title>
      <v-card-subtitle>{{ `【${item.class}】${item.position} `}}</v-card-subtitle>
      <!-- <v-card-text>详细描述</v-card-text> -->
      <v-card-actions>
        <v-btn text small color="primary">了解更多</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import {request} from "../network/request";
request({
  url:'/info/multiSelect'
}).then(res => {
  console.log(res);
}).catch(err =>{
  console.log(err);
})
export default {
  name:"Inform",
  data() {
     return{
       items:[
         {companyname:"",
          jobname:"",
          class:"",
          position:"",
        }
       ]
     }
  },
};
</script>