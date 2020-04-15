<template>
  <div
    ref="pageDiv"
    @mousemove="onmousemove($event)"
    @touchmove="onmousemove($event)"
    @mouseup="onmouseup($event)"
    @touchend="onmouseup($event)"
  >
    <v-container>
      <Allinform ref="mychild"></Allinform>
      <v-parallax
        height="150"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-parallax>
      
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
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet"
          >close</v-btn
        >
        <v-container>
          <h1>搜索表单</h1>
          <h1>未上线</h1>
          <v-text-field label="模糊搜索"></v-text-field>
          <!-- <v-select :items="items" label="学历层次"></v-select>
          <v-select :items="items" label="专业"></v-select>
          <v-select :items="items" label="工作城市"></v-select> -->
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
import Allinform from "../components/Allinform";
export default {
  components: {
    Allinform,
  },
  data() {
    return {
      sheet: false,
      mgrState: false,
      mousedownState: false, //鼠标默认抬起
      iX: 0, //鼠标坐标 与 拖拽按钮 间距 x
      iY: 0, //鼠标坐标 与 拖拽按钮 间距 y
      
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
  right:0;
}
</style>
