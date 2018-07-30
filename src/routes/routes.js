import Home from '../client/Home';
import About from '../client/About';

const routes = [
  { component: Home,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/about',
        component: About
      }
    ]
  }
];

export default routes;