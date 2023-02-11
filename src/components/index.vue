<template>
  <div class="cron-picker">
    <div class="form-group">
      <div class="form-label">
        <span>调度周期：</span>
      </div>
      <div class="form-item">
        <div>
          <el-select v-model="type" size="mini" style="width: 75px">
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
    </div>

    <div class="form-group">
      <div class="form-label">
        <span>Cron：</span>
      </div>
      <div class="form-item">
        <el-input
          size="mini"
          :value="cron"
          style="width: 280px"
          disabled
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import CronMinute from "./CronMinute.vue";
import CronHour from "./CronHour.vue";
import CronDay from "./CronDay.vue";
import CronWeek from "./CronWeek.vue";
import CronMonth from "./CronMonth.vue";

export default {
  name: "CronPicker",
  components: {
    CronMinute,
    CronHour,
    CronDay,
    CronWeek,
    CronMonth,
  },
  data() {
    return {
      type: "minute", // 调度周期
      cron: "", // Cron 表达式
      typeOptions: [
        {
          value: "minute",
          label: "分钟",
        },
        {
          value: "hour",
          label: "小时",
        },
        {
          value: "day",
          label: "天",
        },
        {
          value: "week",
          label: "周",
        },
        {
          value: "month",
          label: "月",
        },
      ],
    };
  },
  computed: {
    currentComponent() {
      return "cron-" + this.type;
    },
  },
  methods: {
    onChange(cron) {
      this.cron = cron;
      this.$emit("change", this.cron);
    },
    reset() {
      this.$refs.picker.reset();
    },
  },
};
</script>

<style>
.cron-picker {
  min-width: 400px;
}

.cron-picker__row {
  margin-top: 10px;
}

.cron-picker__divider {
  color: #949aa6;
  margin: 0 2px;
}
</style>

<style scoped>
.form-group {
  display: flex;
  margin-bottom: 15px;
}

.form-label {
  width: 70px;
  text-align: right;
}

.form-item {
  flex: 1;
}
</style>
