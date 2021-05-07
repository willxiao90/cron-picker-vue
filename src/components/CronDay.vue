<template>
  <div>
    <div>
      <div>
        小时
        <el-select v-model="hours" multiple size="mini" style="width: 350px" @change="emitChange()">
          <el-option
            v-for="item in hourOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div>
        分钟
        <el-select v-model="minute" size="mini" style="width: 65px" @change="emitChange()">
          <el-option
            v-for="item in minuteOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        运行一次
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CronDay',
  data() {
    return {
      hours: [0],
      minute: 0
    }
  },
  computed: {
    hourOptions() {
      return Array.from(Array(24), (_, i) => {
        if (i < 10) {
          return {
            value: i,
            label: '0' + i
          }
        } else {
          return {
            value: i,
            label: i
          }
        }
      })
    },
    minuteOptions() {
      return Array.from(Array(60), (_, i) => {
        if (i < 10) {
          return {
            value: i,
            label: '0' + i
          }
        } else {
          return {
            value: i,
            label: i
          }
        }
      })
    },
    cronExp() {
      if (this.hours.length === 0) {
        return `0 ${this.minute} * * * ?`
      }
      return `0 ${this.minute} ${this.hours.join(',')} * * ?`
    }
  },
  methods: {
    init(value) {
      const tempArr = value.split(' ')
      this.minute = Number(tempArr[1])
      if(tempArr[2] === '*'){
        this.hours = []
      }else{
        const hourArr = tempArr[2].split(',')
      this.hours = hourArr.filter(v => v !== '').map(v => Number(v))
      }
    },
    emitChange() {
      this.$emit('change', this.cronExp)
    }
  }
}
</script>

<style scoped>

</style>
