# cron-picker-vue

模仿阿里云的 Cron 表达式选择组件，支持分钟、小时、天、周、月几种常见的 case。

![](https://willxiao90.github.io/cron-picker-vue/snapshot.png)

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
``` vue
<template>
  <div id="app">
    <el-form  label-width="120px">
      <el-form-item label="调度周期">
        <cron-picker :interval="interval" :cron="cron" @change="onChange" />
      </el-form-item>
      <el-form-item label="Cron 表达式">
        <el-input v-model="cron" placeholder="请输入 Cron 表达式" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CronPicker from 'cron-picker-vue'

export default {
  name: 'App',
  components: {
    CronPicker
  },
  data(){
    return {
      interval: 'minute', // 调度周期
      cron: '' // Cron 表达式
    }
  },
  methods: {
    // change 事件会返回新的 interval 和 cron
    onChange(res) {
      console.log(res)
      this.interval = res.interval
      this.cron = res.cron
    },
  }
}
</script>
```

### 属性

属性名称 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
interval | 调度周期 | string | minute / hour / day / week / month | minute
cron | Cron 表达式 | string | - | '' 

### 事件

事件名称 | 说明 | 参数
---|---|---
change | interval 或 cron 改变会触发 | {interval: string, cron: string}

### 注意

当使用 ui 选择调度周期时，一定会返回正确的 cron 表达式。但是当手动编辑 cron 表达式时，ui 不一定能准确表达，因为 ui 只考虑一些常见的情况，特殊情况 ui 可能无法表达。比如 interval 为分钟，cron 表达式为 10 */5 1-23 * * ?，ui 会正确显示分钟和小时，但是秒就无法展示了。