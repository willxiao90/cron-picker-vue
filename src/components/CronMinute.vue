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
      <el-select v-model="perMinute" size="mini" style="width: 65px" @change="emitChange()">
        <el-option
          v-for="item in minuteOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      分钟运行一次
    </div>
  </div>
</template>

<script>

export default {
  name: 'CronMinute',
  data() {
    return {
      hourBegin: 0,
      hourEnd: 23,
      perMinute: 5
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
      return [5, 10, 15, 20, 30]
    },
    cronExp() {
      return `0 */${this.perMinute} ${this.hourBegin}-${this.hourEnd} * * ?`
    }
  },
  methods: {
    init(value) {
      const tempArr = value.split(' ')
      const minuteArr = tempArr[1].split('/')
      this.perMinute = Number(minuteArr[1])
      const hourArr = tempArr[2].split('-')
      this.hourBegin = Number(hourArr[0])
      this.hourEnd = Number(hourArr[1])
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
