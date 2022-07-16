<template>
  <div>
    <div>
      <div class="cron-picker-row">
        <el-select
          v-model="hours"
          multiple
          size="mini"
          style="width: 280px"
          @change="emitChange()"
        >
          <el-option
            v-for="item in hourOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        小时，
      </div>

      <div class="cron-picker-row">
        分钟
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
  </div>
</template>

<script>
export default {
  name: "CronDay",
  data() {
    return {
      hours: [0],
      minute: 0,
    };
  },
  computed: {
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
      if (this.hours.length === 0) {
        return `0 ${this.minute} * * * ?`;
      }
      return `0 ${this.minute} ${this.hours.join(",")} * * ?`;
    },
  },
  methods: {
    emitChange() {
      this.$emit("change", this.cronExp);
    },
    reset() {
      this.hours = [0];
      this.minute = 0;
      this.emitChange();
    },
  },
};
</script>

<style scoped></style>
