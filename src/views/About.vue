 
 <template>
  <div class="about">
    <v-container>
      <h1>分享你的就业资讯</h1>
      <v-text-field
        class="input"
        name="urlinput"
        label="请输入网址"
        solo
        color="white"
        background-color="white"
        v-model="url"
        :error-messages="uelErrors"
        required
        @input="$v.url.$touch()"
        @blur="$v.url.$touch()"
      ></v-text-field>
      <v-btn
        class="btn"
        depressed
        large
        outlined
        color="white"
        @click="submit()"
        background-color="white"
      >Share</v-btn>
    </v-container>
    <p>信息创造竞争力</p>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, url } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  mixins: [validationMixin],
  validations: {
    url: { required, url }
  },
  data: () => ({
    url: ""
  }),

  computed: {
    uelErrors() {
      const errors = [];
      if (!this.$v.url.$dirty) return errors;
      !this.$v.url.url && errors.push("请按照正确的网址格式输入哦~");
      !this.$v.url.required && errors.push("网址不能为空哦！");
      return errors;
    }
  },
  methods: {
    submit() {
      let url = this.url;
      console.log(url);
      axios
        .get("http://192.144.227.168:8089/home/insertUrl", {
          params: {
            url: ""
          }
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
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
.input {
  float: left;
  width: 60%;
  margin: 1% auto auto 14% !important;
}
.btn {
  margin-right: 10%;
  width: 10%;
  margin-top: 1%;
}
</style>