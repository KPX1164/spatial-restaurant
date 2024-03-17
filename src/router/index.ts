import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkView from '@/views/NetworkView.vue'
import NProgress from 'nprogress'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import FavouriteView from '@/views/FavouriteView.vue'
import SupportView from '@/views/SupportView.vue'
import PofileView from '@/views/PofileView.vue'
import SignInView from '@/views/SignInView.vue'
import SingUpView from '@/views/signup/SingUpView.vue'
import SignUpLayoutView from '@/views/signup/SignUpLayoutView.vue'
import UserDetail from '@/views/user/UserDetail.vue'
import UserLayout from '@/views/user/UserLayout.vue'
import UserPersonalise from '@/views/user/UserPersonalise.vue'
import UserFavourite from '@/views/user/UserFavourite.vue'
import MenuDetail from '@/views/MenuDetailView.vue'
import UserGeneral from '@/views/user/UserGeneral.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu-view',
      component: MenuView
    },
    {
      path: '/favourite',
      name: 'favourite-view',
      component: FavouriteView
    },
    {
      path: '/support',
      name: 'support-view',
      component: SupportView
    },

    {
      path: '/sign-up',
      name: 'signup-layout',
      component: SignUpLayoutView,
      children: [
        {
          path: '',
          name: 'signup-view',
          component: SingUpView
        }
      ]
    },
    {
      path: '/profile',
      name: 'setting-layout',
      component: UserLayout,
      children: [
        {
          path: '',
          name: 'user-detail',
          component: UserDetail
        },
        {
          path: 'general',
          name: 'user-general',
          component: UserGeneral
        },
        {
          path: 'personalise',
          name: 'user-personalise',
          component: UserPersonalise
        },{
          path: 'favourite',
          name: 'user-favourite',
          component: UserFavourite
        }
      ]
    },
    {
      path: '/sign-in',
      name: 'signin-view',
      component: SignInView
    },
    {
      path: '/menu/:menuId',
      name: 'MenuDetailView',
      component: MenuDetail,
      props: true // Allows passing route params as props to the component
    },
    
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: '/not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkView
    }
  ],
  scrollBehavior(ro, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
