<template>
  <div>
    <div>
      <el-select v-model="hourBegin" size="mini" style="width: 65px" @change="emitChange()">
        <el-option
          v-for="item in hourOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="divider">:</span>
      <el-select value="00" size="mini" style="width: 65px" disabled>
        <el-option value="00" label="00" />
      </el-select>

      <span style="margin: 0 5px">到</span>

      <el-select v-model="hourEnd" size="mini" style="width: 65px" @change="emitChange()">
        <el-option
          v-for="item in hourOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="divider">:</span>
      <el-select value="59" size="mini" style="width: 65px" disabled>
        <el-option value="59" label="59" />
      </el-select>
    </div>

    <div>
      每
      <el-select v-model="perHour" size="mini" style="width: 65px" @change="emitChange()">
        <el-option
          v-for="item in hourOptions2"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      小时，分钟
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
</template>

<script>

export default {
  name: 'CronHour',
  data() {
    return {
      hourBegin: 0,
      hourEnd: 23,
      perHour: 1,
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
    hourOptions2() {
      return Array.from(Array(12), (_, i) => i + 1)
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
      return `0 ${this.minute} ${this.hourBegin}-${this.hourEnd}/${this.perHour} * * ?`
    }
  },
  methods: {
    init(value) {
      const tempArr = value.split(' ')
      this.minute = Number(tempArr[1])
      const hourArr = tempArr[2].split('/')
      this.perHour = Number(hourArr[1])
      const hourArr2 = hourArr[0].split('-')
      this.hourBegin = Number(hourArr2[0])
      this.hourEnd = Number(hourArr2[1])
    },
    emitChange() {
      this.$emit('change', this.cronExp)
    }
  }
}
</script>

<style scoped>
.divider{
  color: #949AA6;
}
</style>
