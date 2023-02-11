# cron-picker-vue

模仿阿里云的 Cron 表达式选择组件，支持几种常见的调度周期 case。

![](https://willxiao90.github.io/cron-picker-vue/snapshot3.png)

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
import CronPicker from "cron-picker-vue";

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
```

### 事件

| 事件名称 | 说明                 | 参数          |
| -------- | -------------------- | ------------- |
| change   | 返回新的 Cron 表达式 | string 字符串 |

### 实例方法

reset() 将 Cron 表达式重置为默认值
