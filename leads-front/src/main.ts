import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import STable from '@surely-vue/table';
import '@surely-vue/table/dist/index.less';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

const app = createApp(App)

app.use(router).use(Antd).use(STable)

app.mount('#app')
