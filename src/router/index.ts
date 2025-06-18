import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/LoginPage',
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import ('@/views/LoginPage.vue'),
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: () => import ('@/views/HomePage.vue'),
  },
  {
    path: '/AccountsPage',
    name: 'AccountsPage',
    component: () => import ('@/views/AccountsPage.vue'),
  },
  {
    path: '/PiggyBanksPage',
    name: 'PiggyBanksPage',
    component: () => import ('@/views/PiggyBanksPage.vue'),
  },
  {
    path: '/StatsPage',
    name: 'StatsPage',
    component: () => import ('@/views/StatsPage.vue'),
  },
  {
    path: '/CategoriesPage',
    name: 'CategoriesPage',
    component: () => import ('@/views/CategoriesPage.vue'),
  },
  {
    path: '/SettingsPage',
    name: 'SettingsPage',
    component: () => import ('@/views/SettingsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

function nextFactory(context: any, middleware: any, index: any) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters: any[]) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router
