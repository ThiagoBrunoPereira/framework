import { createApp } from 'vue'
import App from './App.vue'

import Lib from './lib'

import './assets/main.css';

const app = createApp(App);
app.use(Lib);

app.mount("#app");