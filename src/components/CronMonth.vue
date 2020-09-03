<template>
  <div>
    <div>
      <div>
        <el-select v-model="days" multiple size="mini" style="width: 350px" @change="emitChange()">
          <el-option
            v-for="item in dayOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        日，
      </div>

      <div>
        小时
        <el-select v-model="hour" size="mini" style="width: 65px" @change="emitChange()">
          <el-option
            v-for="item in hourOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        ，分钟
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
  name: 'CronMonth',
  data() {
    return {
      days: [1],
      hour: 0,
      minute: 0
    }
  },
  computed: {
    dayOptions() {
      return Array.from(Array(31), (_, i) => i + 1)
    },
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
      if (this.days.length === 0) {
        return `0 ${this.minute} ${this.hour} * * ?`
      }
      return `0 ${this.minute} ${this.hour} ${this.days.join(',')} * ?`
    }
  },
  methods: {
    init(value) {
      const tempArr = value.split(' ')
      this.minute = Number(tempArr[1])
      this.hour = Number(tempArr[2])
      const dayArr = tempArr[3].split(',')
      this.days = dayArr.filter(v => v !== '').map(v => Number(v))
    },
    emitChange() {
      this.$emit('change', this.cronExp)
    }
  }
}
</script>

<style scoped>

</style>
