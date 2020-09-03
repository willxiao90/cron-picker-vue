<template>
  <div>
    <div>
      <div>
        <el-select v-model="weeks" multiple size="mini" style="width: 350px" @change="emitChange()">
          <el-option
            v-for="item in weekOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
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
  name: 'CronWeek',
  data() {
    return {
      weeks: [2],
      hour: 0,
      minute: 0
    }
  },
  computed: {
    weekOptions() {
      return [{
        value: 1,
        label: '周日'
      }, {
        value: 2,
        label: '周一'
      }, {
        value: 3,
        label: '周二'
      }, {
        value: 4,
        label: '周三'
      }, {
        value: 5,
        label: '周四'
      }, {
        value: 6,
        label: '周五'
      }, {
        value: 7,
        label: '周六'
      }]
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
      if (this.weeks.length === 0) {
        return `0 ${this.minute} ${this.hour} ? * *`
      }
      return `0 ${this.minute} ${this.hour} ? * ${this.weeks.join(',')}`
    }
  },
  methods: {
    init(value) {
      const tempArr = value.split(' ')
      this.minute = Number(tempArr[1])
      this.hour = Number(tempArr[2])
      const weekArr = tempArr[5].split(',')
      this.weeks = weekArr.filter(v => v !== '').map(v => Number(v))
    },
    emitChange() {
      this.$emit('change', this.cronExp)
    }
  }
}
</script>

<style scoped>

</style>
