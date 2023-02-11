<template>
  <div>
    <div class="cron-picker__row">
      <el-select
        v-model="weeks"
        multiple
        size="mini"
        style="width: 280px"
        @change="emitChange()"
      >
        <el-option
          v-for="item in weekOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="cron-picker__row">
      小时
      <el-select
        v-model="hour"
        size="mini"
        style="width: 65px"
        @change="emitChange()"
      >
        <el-option
          v-for="item in hourOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      ，分钟
      <el-select
        v-model="minute"
        size="mini"
        style="width: 65px"
        @change="emitChange()"
      >
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
  name: "CronWeek",
  data() {
    return {
      weeks: [1],
      hour: 0,
      minute: 0,
    };
  },
  computed: {
    weekOptions() {
      return [
        {
          value: 1,
          label: "周一",
        },
        {
          value: 2,
          label: "周二",
        },
        {
          value: 3,
          label: "周三",
        },
        {
          value: 4,
          label: "周四",
        },
        {
          value: 5,
          label: "周五",
        },
        {
          value: 6,
          label: "周六",
        },
        {
          value: 7,
          label: "周日",
        },
      ];
    },
    hourOptions() {
      return Array.from(Array(24), (_, i) => {
        if (i < 10) {
          return {
            value: i,
            label: "0" + i,
          };
        } else {
          return {
            value: i,
            label: i,
          };
        }
      });
    },
    minuteOptions() {
      return Array.from(Array(60), (_, i) => {
        if (i < 10) {
          return {
            value: i,
            label: "0" + i,
          };
        } else {
          return {
            value: i,
            label: i,
          };
        }
      });
    },
    cronExp() {
      if (this.weeks.length === 0) {
        return `0 ${this.minute} ${this.hour} ? * *`;
      }
      return `0 ${this.minute} ${this.hour} ? * ${this.weeks.join(",")}`;
    },
  },
  mounted() {
    this.emitChange();
  },
  methods: {
    emitChange() {
      this.$emit("change", this.cronExp);
    },
    reset() {
      this.weeks = [1];
      this.hour = 0;
      this.minute = 0;

      this.emitChange();
    },
  },
};
</script>
