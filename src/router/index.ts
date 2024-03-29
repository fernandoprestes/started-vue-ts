import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import HomePage from '~/views/HomePage/index.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
