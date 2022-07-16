# cron-picker-vue

模仿阿里云的 Cron 表达式选择组件，支持几种常见的调度周期 case。

![](https://willxiao90.github.io/cron-picker-vue/snapshot2.png)

### Demo

[https://willxiao90.github.io/cron-picker-vue/](https://willxiao90.github.io/cron-picker-vue/)

### 依赖

- Vue 2.0.0+
- element-ui 2.0.0+

### 安装

```
npm install cron-picker-vue
```

### 示例

```vue
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
import CronPicker from "cron-picker-vue";

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
```

### 事件

| 事件名称 | 说明                 | 参数          |
| -------- | -------------------- | ------------- |
| change   | 返回新的 Cron 表达式 | string 字符串 |
| close    | 点击关闭按钮时触发   | 无            |
