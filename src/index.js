import CronPicker from './components/index.vue';

const install = (Vue) => {
    Vue.component(CronPicker.name, CronPicker);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default CronPicker;