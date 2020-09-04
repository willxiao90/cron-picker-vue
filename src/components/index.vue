<template>
  <div>
    <div>
      <el-select v-model="type" size="mini" style="width: 75px" @change="onTypeChange">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <component :is="currentComponent" ref="picker" @change="onChange" />
  </div>
</template>

<script>
import CronMinute from './CronMinute.vue'
import CronHour from './CronHour.vue'
import CronDay from './CronDay.vue'
import CronWeek from './CronWeek.vue'
import CronMonth from './CronMonth.vue'

export default {
  name: 'CronPicker',
  components: {
    CronMinute,
    CronHour,
    CronDay,
    CronWeek,
    CronMonth
  },
  props: {
    // 调度周期
    interval: {
      type: String,
      default: 'minute'
    },
    // Cron 表达式
    cron: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      type: 'minute',
      typeOptions: [
        {
          value: 'minute',
          label: '分钟'
        },
        {
          value: 'hour',
          label: '小时'
        },
        {
          value: 'day',
          label: '天'
        },
        {
          value: 'week',
          label: '周'
        },
        {
          value: 'month',
          label: '月'
        }
      ]
    }
  },
  computed: {
    currentComponent() {
      return 'cron-' + this.type
    }
  },
  watch: {
    interval: {
      handler: function(newVal, oldVal) {
        // console.log(newVal, oldVal)
        this.type = newVal || 'minute'
      },
      immediate: true
    },
    cron: {
      handler: function(newVal, oldVal) {
        // console.log(newVal, oldVal)
        if (newVal.length > 0) {
          this.$nextTick(() => {
            this.$refs.picker.init(newVal || '')
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    onTypeChange(type) {
      this.$nextTick(() => {
        const cron = this.$refs.picker.cronExp
        // console.log(type, cron)
        this.$emit('change', {
          interval: type,
          cron
        })
      })
    },
    onChange(cron) {
      this.$emit('change', {
        interval: this.interval,
        cron
      })
    }
  }
}
</script>

<style scoped>

</style>
