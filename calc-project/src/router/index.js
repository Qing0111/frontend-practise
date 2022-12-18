import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcView from '../views/CalcView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/componentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/componentB.vue')
      },
      {
        path: 'DynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'DynamicRouterProps/:id',
        component: () => import('../views/DynamicRouterProps.vue'),
        props: (route) => {
          console.log('route', route);
          return {
            id: route.params.id,
          };
        }
      },
      {
        path: 'namedView',
        component: () => import('../views/namedView.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../views/componentA.vue'),
              right: () => import('../views/componentB.vue')
            }
          }
        ]
      }
    ]
  },
  {
    path: '/calc',
    name: 'calc',
    component: CalcView
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/about/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if(to.fullPath.match('about')) {
      return{
        top: 0,
      };
    }
    // return {};
  }
})

export default router
