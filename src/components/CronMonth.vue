<template>
  <div>
    <div class="cron-picker__row">
      <el-select
        v-model="days"
        multiple
        size="mini"
        style="width: 280px"
        @change="emitChange()"
      >
        <el-option
          v-for="item in dayOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      日，
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
  name: "CronMonth",
  data() {
    return {
      days: [1],
      hour: 0,
      minute: 0,
    };
  },
  computed: {
    dayOptions() {
      return Array.from(Array(31), (_, i) => i + 1);
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
      if (this.days.length === 0) {
        return `0 ${this.minute} ${this.hour} * * ?`;
      }
      return `0 ${this.minute} ${this.hour} ${this.days.join(",")} * ?`;
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
      this.days = [1];
      this.hour = 0;
      this.minute = 0;

      this.emitChange();
    },
  },
};
</script>
