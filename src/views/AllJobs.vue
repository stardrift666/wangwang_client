<template>
  <div
    ref="pageDiv"
    @mousemove="onmousemove($event)"
    @touchmove="onmousemove($event)"
    @mouseup="onmouseup($event)"
    @touchend="onmouseup($event)"
  >
    <v-container>
      <v-card v-for="(item, index) in s" :key="index+100" class="info-card">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>
          {{
          `【${item.class}】${item.city} `
          }}
        </v-card-subtitle>
        <!-- <v-card-text>详细描述</v-card-text> -->
        <v-card-actions>
          <v-btn text small color="primary">了解更多</v-btn>
        </v-card-actions>
      </v-card>
      <v-parallax height="150" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

      <v-card v-for="(item, index) in f" :key="index" class="info-card">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>
          {{
          `【${item.class}】${item.city} `
          }}
        </v-card-subtitle>
        <!-- <v-card-text>详细描述</v-card-text> -->
        <v-card-actions>
          <v-btn text small color="primary">了解更多</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <!-- 底部表单 -->
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on }">
        <div
          ref="actionMgr"
          @mousedown="onmousedown($event)"
          @touchstart="onmousedown($event)"
          class="action-btn"
        >
          <v-btn class="mx-2" fab dark color="blue" v-on="on">
            <v-icon dark>search</v-icon>
          </v-btn>
        </div>
      </template>
      <v-sheet class="text-center">
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">close</v-btn>
        <v-container>
          <div id="searchForm">
            <v-text-field label="类别" v-model="searchFormData.type"></v-text-field>
            <v-text-field label="工作地点" v-model="searchFormData.position"></v-text-field>
            <v-text-field label="公司名称" v-model="searchFormData.companyName"></v-text-field>
            <v-text-field label="公司性质" v-model="searchFormData.companyNature"></v-text-field>
            <v-text-field label="职务名称" v-model="searchFormData.jobName"></v-text-field>
            <v-text-field label="职务性质" v-model="searchFormData.jobNature"></v-text-field>
            <v-text-field label="教育背景" v-model="searchFormData.eduBackground"></v-text-field>
            <v-btn @click="agreeSearch()">搜索</v-btn>
          </div>
          <div id="resultForm">
            <v-btn text color="primary" @click="resultFormShow()" class="right-btn">返回</v-btn>
            <br />
            <v-card v-for="(item,index) in jobDatas" v-bind:key="index" class="info-card">
              <v-card-title>
                <span>{{ `${item.jobName}【${item.position}】`}}</span>
              </v-card-title>
              <v-card-subtitle
                class="text-left"
              >{{`${item.type} | ${item.jobNature} | ${item.eduBackground}`}}</v-card-subtitle>
              <v-card-text class="text-left">
                <span class="font-weight-black">{{`${item.companyName} ${item.companyNature}`}}</span>
                <v-btn text small color="primary" class="float-right" v-bind:href="item.url">查看链接</v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default {
  created() {
    this.acceptData();
    this.jobDatas=this.jobData;
  },
  data() {
    return {
      sheet: false,
      searchFor: false,
      mgrState: false,
      mousedownState: false, //鼠标默认抬起
      iX: 0, //鼠标坐标 与 拖拽按钮 间距 x
      iY: 0, //鼠标坐标 与 拖拽按钮 间距 y
      ShowPage: false,
      ShowForm: false,
      details: {},
      searchFormData: {
        type: "",
        position: "",
        companyName: "",
        companyNature: "",
        jobName: "",
        jobNature: "",
        eduBackground: ""
      },
      jobData:"",
      jobDatas: [
        {
          type: "",
          position: "",
          companyName: "",
          companyNature: "",
          jobName: "",
          jobNature: "",
          eduBackground: ""
        }
      ],
      searchData: {},
      s: [
        {
          class: "政法类",
          city: "广东",
          title: "深圳市龙华区教育局2020年春招全面启动"
        },
        {
          class: "政法类",
          city: "北京",
          title:
            "密云区教育委员会所属学校关于面向非北京生源2020年应届毕业生招聘教师工作的通知"
        },
        {
          class: "政法类",
          city: "山东",
          title: "2020年青岛市市北区教育和体育局所属中学公开选聘优秀教师公告"
        },
        {
          class: "政法类",
          city: "吉林",
          title: "四平市教育局面向2020届应届硕士研究生校园公开招聘34名教师公告"
        },
        {
          class: "政法类",
          city: "四川",
          title: "南充市2020年引进高层次人才公告"
        },
        { class: "政法类", city: "湖北", title: "荆门市2020年“招硕引博”公告" },
        {
          class: "政法类",
          city: "黑龙江",
          title: "关于举办大庆市首届“云”招聘会的通知"
        },
        {
          class: "政法类",
          city: "江西",
          title: "峡江县教体局2020年3月公开选调3名教研员的公告"
        },
        {
          class: "政法类",
          city: "山东",
          title: "德州市陵城区关于2020年3月引进教育教学人才的公告"
        }
      ],
      f: [
        {
          class: "政法类",
          city: "上海",
          title:
            "同济大学生命科学与技术学院杨鹏课题组2020年招聘助理研究员、博士后、科研助理"
        },
        {
          class: "政法类",
          city: "四川",
          title:
            "四川大学力学系青年长江学者范海冬教授课题组2020年副研究员招聘启事"
        },
        {
          class: "政法类",
          city: "天津",
          title: "南开大学分析化学庞代文教授团队长期招聘博士后"
        },
        {
          class: "政法类",
          city: "广东",
          title:
            "华南理工大学国际教育学院安然教授团队2020年3月招聘1名科研助理启事"
        },
        {
          class: "政法类",
          city: "山东",
          title:
            "中国海洋大学材料科学与工程学院2020年3月招聘1名实验技术人员启事"
        },
        {
          class: "政法类",
          city: "北京",
          title: "中国地质大学（北京）2020年3月招聘1名科研管理岗位人员公告"
        },
        {
          class: "政法类",
          city: "吉林",
          title: "东北师范大学文学院2020年3月招聘7名师资博士后启事"
        },
        {
          class: "政法类",
          city: "安徽",
          title: "安徽工业大学2020年度辅导员岗位招聘公告"
        },
        {
          class: "政法类",
          city: "辽宁",
          title: "大连外国语大学2020年公开招聘高层次和急需紧缺人才公告"
        },
        {
          class: "政法类",
          city: "江苏",
          title: "南京信息工程大学2020年招聘2名现代教育技术中心专业技术人员公告"
        },
        {
          class: "政法类",
          city: "北京",
          title: "中国电科电子科学研究院智能系统研究所2020年招聘"
        },
        {
          class: "政法类",
          city: "广东",
          title: "深圳市金融稳定发展研究院招聘公告"
        },
        {
          class: "政法类",
          city: "浙江",
          title: "浙江省社会主义学院2020年公开招聘人员公告"
        },
        {
          class: "政法类",
          city: "北京",
          title:
            "中国科学院科技战略咨询研究院科技管理处2020年3月招聘1名项目助理启事"
        },
        {
          class: "政法类",
          city: "北京",
          title:
            "中国科学院微生物研究所微生物资源前期开发国家重点实验室潘国辉研究组2020年3月招聘3名人员启事"
        },
        {
          class: "政法类",
          city: "辽宁",
          title: "中国科学院沈阳分院2020年3月招聘2名人员公告"
        },
        { class: "政法类", city: "广东", title: "佛山市实验学校招聘公告" },
        {
          class: "政法类",
          city: "江西",
          title: "上饶市第一中学2020年公开遴选教师56名"
        },
        {
          class: "政法类",
          city: "安徽",
          title: "淮南淮河中学2020年教师招聘29人"
        },
        {
          class: "政法类",
          city: "新疆",
          title: "新疆兵团二中金科实验中学教师招聘公告"
        },
        {
          class: "政法类",
          city: "海南",
          title: "华东师范大学澄迈实验中学2020年专任教师招聘31人"
        },
        {
          class: "政法类",
          city: "贵州",
          title: "六盘水市第四中学2020年招聘6名教师启事"
        },
        {
          class: "政法类",
          city: "云南",
          title: "昆明市海亦丰中学2020年春季教师招聘公告"
        },
        {
          class: "政法类",
          city: "河北",
          title: "河北沧州献县一中2020年公开招聘教师公告"
        },
        { class: "政法类", city: "四川", title: "北附广南实验学校招聘简章" },
        {
          class: "政法类",
          city: "广东",
          title: "汕尾普宁华美实验学校2020教师招聘130人"
        },
        {
          class: "政法类",
          city: "山东",
          title: "聊城莘县莘州中学2020年招聘教师公告"
        },
        {
          class: "政法类",
          city: "云南",
          title: "昆明官渡区职业高级中学2020年教师招聘公告"
        },
        {
          class: "政法类",
          city: "广东",
          title: "广州祈福英语实验小学招聘简章"
        },
        {
          class: "政法类",
          city: "广东",
          title: "华南师范大学附属荔湾小学2020年面向全国公开招聘工作人员"
        },
        {
          class: "政法类",
          city: "浙江",
          title: "浙江中公教育科技有限公司教师招聘公告"
        },
        { class: "政法类", city: "辽宁", title: "新东方沈阳学校招聘" },
        {
          class: "政法类",
          city: "全国",
          title: "学而思网校招聘高中在线班主任老师（在线辅导老师）"
        },
        {
          class: "政法类",
          city: "浙江",
          title: "杭州海亮学前教育集团有限公司教师招聘公告"
        },
        {
          class: "政法类",
          city: "黑龙江",
          title: "肇东市柏思培训学校有限公司教师招聘公告"
        },
        {
          class: "政法类",
          city: "辽宁",
          title: "沈阳市皇姑区实验博优教育培训中心教师招聘公告"
        },
        {
          class: "政法类",
          city: "上海",
          title: "上海知申教育科技有限公司教师招聘公告"
        },
        {
          class: "政法类",
          city: "广东",
          title: "深圳市蓝天教育培训学校招聘信息"
        },
        {
          class: "政法类",
          city: "江苏",
          title: "苏州市光华教育投资集团有限公司教师招聘公告"
        },
        {
          class: "政法类",
          city: "浙江",
          title: "浙江纳思教育科技有限公司教师招聘公告"
        },
        {
          class: "政法类",
          city: "江苏",
          title: "连云港市金奥教育培训中心教师招聘公告"
        },
        {
          class: "政法类",
          city: "上海",
          title: "上海学畅出国留学服务有限公司教师招聘公告"
        }
      ]
    };
  },
  methods: {
    /* 鼠标按下事件 */
    onmousedown(event) {
      /* 此处判断  pc 或 移动端 得到 event 事件 */
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      // 鼠标点击 面向页面 的 x坐标 y坐标
      let { clientX, clientY } = touch;
      // 鼠标x坐标 - 拖拽按钮x坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iX = clientX - this.$refs.actionMgr.offsetLeft;
      // 鼠标y坐标 - 拖拽按钮y坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iY = clientY - this.$refs.actionMgr.offsetTop;
      // 设置当前 状态为 鼠标按下
      this.mousedownState = true;
    },
    /* 鼠标移动事件 */
    onmousemove(event) {
      //鼠标按下 切移动中
      if (this.mousedownState) {
        /* 此处判断  pc 或 移动端 得到 event 事件 */
        let touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        // 鼠标移动时 面向页面 的 x坐标 y坐标
        let { clientX, clientY } = touch;
        //当前页面全局容器 dom 元素  获取容器 宽高
        let {
          clientHeight: pageDivY,
          clientWidth: pageDivX
        } = this.$refs.pageDiv;
        /* 鼠标坐标 - 鼠标与拖拽按钮的 间距坐标  得到 拖拽按钮的 左上角 x轴y轴坐标 */
        let [x, y] = [clientX - this.iX, clientY - this.iY];

        //拖拽按钮 dom 元素  获取 宽高 style 对象
        let {
          clientHeight: actionMgrY,
          clientWidth: actionMgrX,
          style: actionMgrStyle
        } = this.$refs.actionMgr;
        /* 此处判断 拖拽按钮 如果超出 屏幕宽高 或者 小于  
           设置 屏幕最大 x=全局容器x y=全局容器y 否则 设置 为 x=0 y=0 
        */
        if (x > pageDivX - actionMgrX) {
          x = pageDivX - actionMgrX;
        } else if (x < 0) {
          x = 0;
        }
        if (y > pageDivY - actionMgrY) {
          y = pageDivY - actionMgrY;
        } else if (y < 0) {
          y = 0;
        }
        // 计算后坐标  设置 按钮位置
        actionMgrStyle.left = `${x}px`;
        actionMgrStyle.top = `${y}px`;
        actionMgrStyle.bottom = "auto";
        actionMgrStyle.right = "auto";

        // 当按下键滑动时， 阻止屏幕滑动事件
        event.preventDefault();
      }
    },
    /* 鼠标抬起事件 */
    onmouseup() {
      // 设置当前状态为鼠标抬起
      this.mousedownState = false;
    },
    jsonData(arr) {
      let json = "";
      function fors(data, attr = false) {
        data = JSON.parse(JSON.stringify(data));
        for (let key in data) {
          if (
            Array.isArray(data[key]) ||
            Object.prototype.toString.apply(data[key]) === "[object Object]"
          ) {
            fors(data[key], true);
          } else {
            if (attr) {
              json = json + "&" + key + "[]" + "=" + data[key];
            } else {
              json = json + "&" + key + "=" + data[key];
            }
          }
        }
      }
      fors(arr);
      return json;
    },

    // 表单模糊实时搜索
    agreeSearch() {
      let position = this.searchFormData.position;
      let type = this.searchFormData.type;
      let companyName = this.searchFormData.companyName;
      let companyNature = this.searchFormData.companyNature;
      let jobName = this.searchFormData.jobName;
      let jobNature = this.searchFormData.jobNature;
      let eduBackground = this.searchFormData.eduBackground;
      if (this.searchFormData.type !== "") {
        this.$set(this.searchData, "type", type);
      }
      if (this.searchFormData.companyName !== "") {
        this.$set(this.searchData, "companyName", companyName);
      }
      if (this.searchFormData.companyNature !== "") {
        this.$set(this.searchData, "companyNature", companyNature);
      }
      if (this.searchFormData.jobName !== "") {
        this.$set(this.searchData, "jobName", jobName);
      }
      if (this.searchFormData.jobNature !== "") {
        this.$set(this.searchData, "jobNature", jobNature);
      }
      if (this.searchFormData.eduBackground !== "") {
        this.$set(this.searchData, "eduBackground", eduBackground);
      }
      if (this.searchFormData.position !== "") {
        this.$set(this.searchData, "position", position);
      }
      let data = this.searchData;
      axios
        .get("http://210.47.16.56:8080/info/multiSelect", {
          params: data
        })
        .then(res => {
          this.jobDatas = res.data.data;
          this.searchFormData = {};
        });
      // this.ShowPage = true;
      // this.ShowForm = false;
      document.getElementById("searchForm").style.display = "none";
      document.getElementById("resultForm").style.display = "inline";
    },
    resultFormShow() {
      // this.ShowPage = false;
      // this.ShowForm = true;
      document.getElementById("searchForm").style.display = "inline";
      document.getElementById("resultForm").style.display = "none";
    },
    acceptData() {
      axios
        .get("http://210.47.16.56:8080/info/multiSelect")
        .then(response => {
          this.jobData = response.data.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style lang="less" scoped>
.action-btn {
  // width: 56px;
  // height: 56px;
  position: fixed;
  top: 0;
  right: 0;
}
.subtitle {
  text-align: left;
}
#resultForm {
  display: none;
}
#searchForm {
  display: inline;
}
.right-btn {
  position: fixed;
  right: 0;
}
</style>
