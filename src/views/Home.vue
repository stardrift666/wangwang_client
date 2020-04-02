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
      <v-card v-for="(item, index) in f" :key="index" class="info-card">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ `【${item.class}】${item.city} `}}</v-card-subtitle>
        <!-- <v-card-text>详细描述</v-card-text> -->
        <v-card-actions>
          <v-btn text small color="primary">了解更多</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
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
      f: [
        { class:"政法类",city: "广东", title: "深圳市龙华区教育局2020年春招全面启动" },
        {
          class:"政法类",city: "北京",
          title:
            "密云区教育委员会所属学校关于面向非北京生源2020年应届毕业生招聘教师工作的通知"
        },
        {
          class:"政法类",city: "山东",
          title: "2020年青岛市市北区教育和体育局所属中学公开选聘优秀教师公告"
        },
        {
          class:"政法类",city: "吉林",
          title: "四平市教育局面向2020届应届硕士研究生校园公开招聘34名教师公告"
        },
        { class:"政法类",city: "四川", title: "南充市2020年引进高层次人才公告" },
        { class:"政法类",city: "湖北", title: "荆门市2020年“招硕引博”公告" },
        { class:"政法类",city: "黑龙江", title: "关于举办大庆市首届“云”招聘会的通知" },
        { class:"政法类",city: "江西", title: "峡江县教体局2020年3月公开选调3名教研员的公告" },
        {
          class:"政法类",city: "山东",
          title: "德州市陵城区关于2020年3月引进教育教学人才的公告"
        },
        {
          class:"政法类",city: "上海",
          title:
            "同济大学生命科学与技术学院杨鹏课题组2020年招聘助理研究员、博士后、科研助理"
        },
        {
          class:"政法类",city: "四川",
          title:
            "四川大学力学系青年长江学者范海冬教授课题组2020年副研究员招聘启事"
        },
        { class:"政法类",city: "天津", title: "南开大学分析化学庞代文教授团队长期招聘博士后" },
        {
          class:"政法类",city: "广东",
          title:
            "华南理工大学国际教育学院安然教授团队2020年3月招聘1名科研助理启事"
        },
        {
          class:"政法类",city: "山东",
          title:
            "中国海洋大学材料科学与工程学院2020年3月招聘1名实验技术人员启事"
        },
        {
          class:"政法类",city: "北京",
          title: "中国地质大学（北京）2020年3月招聘1名科研管理岗位人员公告"
        },
        {
          class:"政法类",city: "吉林",
          title: "东北师范大学文学院2020年3月招聘7名师资博士后启事"
        },
        { class:"政法类",city: "安徽", title: "安徽工业大学2020年度辅导员岗位招聘公告" },
        {
          class:"政法类",city: "辽宁",
          title: "大连外国语大学2020年公开招聘高层次和急需紧缺人才公告"
        },
        {
          class:"政法类",city: "江苏",
          title: "南京信息工程大学2020年招聘2名现代教育技术中心专业技术人员公告"
        },
        {
          class:"政法类",city: "北京",
          title: "中国电科电子科学研究院智能系统研究所2020年招聘"
        },
        { class:"政法类",city: "广东", title: "深圳市金融稳定发展研究院招聘公告" },
        { class:"政法类",city: "浙江", title: "浙江省社会主义学院2020年公开招聘人员公告" },
        {
          class:"政法类",city: "北京",
          title:
            "中国科学院科技战略咨询研究院科技管理处2020年3月招聘1名项目助理启事"
        },
        {
          class:"政法类",city: "北京",
          title:
            "中国科学院微生物研究所微生物资源前期开发国家重点实验室潘国辉研究组2020年3月招聘3名人员启事"
        },
        { class:"政法类",city: "辽宁", title: "中国科学院沈阳分院2020年3月招聘2名人员公告" },
        { class:"政法类",city: "广东", title: "佛山市实验学校招聘公告" },
        { class:"政法类",city: "江西", title: "上饶市第一中学2020年公开遴选教师56名" },
        { class:"政法类",city: "安徽", title: "淮南淮河中学2020年教师招聘29人" },
        { class:"政法类",city: "新疆", title: "新疆兵团二中金科实验中学教师招聘公告" },
        {
          class:"政法类",city: "海南",
          title: "华东师范大学澄迈实验中学2020年专任教师招聘31人"
        },
        { class:"政法类",city: "贵州", title: "六盘水市第四中学2020年招聘6名教师启事" },
        { class:"政法类",city: "云南", title: "昆明市海亦丰中学2020年春季教师招聘公告" },
        { class:"政法类",city: "河北", title: "河北沧州献县一中2020年公开招聘教师公告" },
        { class:"政法类",city: "四川", title: "北附广南实验学校招聘简章" },
        { class:"政法类",city: "广东", title: "汕尾普宁华美实验学校2020教师招聘130人" },
        { class:"政法类",city: "山东", title: "聊城莘县莘州中学2020年招聘教师公告" },
        { class:"政法类",city: "云南", title: "昆明官渡区职业高级中学2020年教师招聘公告" },
        { class:"政法类",city: "广东", title: "广州祈福英语实验小学招聘简章" },
        {
          class:"政法类",city: "广东",
          title: "华南师范大学附属荔湾小学2020年面向全国公开招聘工作人员"
        },
        { class:"政法类",city: "浙江", title: "浙江中公教育科技有限公司教师招聘公告" },
        { class:"政法类",city: "辽宁", title: "新东方沈阳学校招聘" },
        {
          class:"政法类",city: "全国",
          title: "学而思网校招聘高中在线班主任老师（在线辅导老师）"
        },
        { class:"政法类",city: "浙江", title: "杭州海亮学前教育集团有限公司教师招聘公告" },
        { class:"政法类",city: "黑龙江", title: "肇东市柏思培训学校有限公司教师招聘公告" },
        { class:"政法类",city: "辽宁", title: "沈阳市皇姑区实验博优教育培训中心教师招聘公告" },
        { class:"政法类",city: "上海", title: "上海知申教育科技有限公司教师招聘公告" },
        { class:"政法类",city: "广东", title: "深圳市蓝天教育培训学校招聘信息" },
        { class:"政法类",city: "江苏", title: "苏州市光华教育投资集团有限公司教师招聘公告" },
        { class:"政法类",city: "浙江", title: "浙江纳思教育科技有限公司教师招聘公告" },
        { class:"政法类",city: "江苏", title: "连云港市金奥教育培训中心教师招聘公告" },
        { class:"政法类",city: "上海", title: "上海学畅出国留学服务有限公司教师招聘公告" }
      ]
    };
  }
};
</script>
