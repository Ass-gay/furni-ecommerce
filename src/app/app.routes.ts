import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'shop',
        component: Shop,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'services',
        component: Services,
      },
      {
        path: 'blog',
        component: Blog,
      },
      {
        path: 'contact',
        component: Contact,
      },

      {
        path: 'cart',
        component: Cart,
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
];
