<template>
  <div id="app">
    <el-form  label-width="120px">
      <el-form-item label="调度周期">
        <cron-picker :interval="interval" :cron="cron" @change="onChange" />
      </el-form-item>
      <el-form-item label="Cron 表达式">
        <el-input v-model="cron" placeholder="请输入 Cron 表达式" />
      </el-form-item>
      <el-form-item label="">
        <el-alert
        title="当使用 ui 选择调度周期时，一定会返回正确的 cron 表达式。但是当手动编辑 cron 表达式时，ui 不一定能准确表达，因为 ui 只考虑一些常见的情况，特殊情况 ui 可能无法表达。比如调度周期为分钟，cron 表达式为 10 */5 1-23 * * ?，ui 会正确显示分钟和小时，但是秒就无法展示。"
        type="warning">
      </el-alert>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CronPicker from '../src/components/index.vue'

export default {
  name: 'App',
  components: {
    CronPicker
  },
  data(){
    return {
      interval: 'minute',
      cron: ''
    }
  },
  methods: {
    onChange(res) {
      console.log(res)
      this.interval = res.interval
      this.cron = res.cron
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 50%;
}
</style>
