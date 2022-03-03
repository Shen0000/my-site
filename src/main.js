import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
var app = createApp(App);
app.use(router);
app.mount("#app");
app.component("v-select", vSelect);
app.config.globalProperties.$picked = "blue";
app.config.globalProperties.$colors = [
    {id: 1, value: 'light'},
    {id: 2, value: 'dark'},
    {id: 3, value: 'neon'},
    {id: 4, value: 'blue'},
];