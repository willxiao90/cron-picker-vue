<template>
  <div id="app">
    <el-popover v-model="popoverVisible" width="480">
      <el-input
        slot="reference"
        v-model="inputValue"
        placeholder="Cron 表达式"
        style="width: 500px"
      />

      <div>
        <cron-picker ref="picker" @change="onChange" />

        <div class="actions">
          <el-button type="primary" size="small" @click="confirm()"
            >确定</el-button
          >
          <el-button type="default" size="small" @click="close()"
            >关闭</el-button
          >
        </div>
      </div>
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
      popoverVisible: false, // 是否显示 popover
      inputValue: "", // 输入框的值
      cron: "", // Cron 表达式
    };
  },
  methods: {
    onChange(cron) {
      console.log({ cron });
      this.cron = cron;
    },
    close() {
      this.popoverVisible = false;
    },
    confirm() {
      this.inputValue = this.cron;
      this.$refs.picker.reset();
      this.close();
    },
  },
};
</script>

<style>
#app {
  padding: 30px;
}

.actions {
  display: flex;
  justify-content: center;
}
</style>
