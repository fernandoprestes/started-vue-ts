import { createApp } from 'vue';
import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import router from './router';
import AxiosAdapter from './infra/http/AxiosAdapter';

import UsersGatewayHttp from './infra/gateway/UsersGatewayHttp';

const app = createApp(App);

const httpClient = new AxiosAdapter();
const usersGateway = new UsersGatewayHttp(httpClient);

app.provide('usersGateway', usersGateway);

app.use(router);

app.mount('#app');
