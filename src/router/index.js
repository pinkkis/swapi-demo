import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/people',
		name: 'people',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/PeopleView.vue'),
	},
	{
		path: '/planets',
		name: 'planets',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/PlanetsView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
