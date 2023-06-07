import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';

import '@unocss/reset/tailwind.css';
import App from './App.vue';
import 'uno.css';
import UsersGatewayHttp from './infra/gateway/UsersGatewayHttp';
import AxiosAdapter from './infra/http/AxiosAdapter';
import router from './router';

const app = createApp(App);

const httpClient = new AxiosAdapter();
const usersGateway = new UsersGatewayHttp(httpClient);

app.provide('usersGateway', usersGateway);

app.use(router);
app.use(VueQueryPlugin);

app.mount('#app');
