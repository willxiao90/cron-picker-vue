<template>
  <div id="app">
    <el-popover v-model="popoverVisible" width="480">
      <cron-picker @change="onChange" @close="close()" />
      <el-input
        slot="reference"
        v-model="cron"
        placeholder="Cron 表达式"
        style="width: 500px"
      />
    </el-popover>
  </div>
</template>

<script>
import CronPicker from "../src/components/index.vue";

export default {
  name: "App",
  components: {
    CronPicker,
  },
  data() {
    return {
      popoverVisible: false, // 是否显示 popover 提示框
      cron: "", // Cron 表达式
    };
  },
  methods: {
    // change 事件会返回新的 cron 表达式
    onChange(cron) {
      console.log(cron);
      this.cron = cron;
      this.close();
    },
    // 关闭 popover 提示框
    close() {
      this.popoverVisible = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}
</style>
