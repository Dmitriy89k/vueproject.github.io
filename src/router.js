import VueRouter from 'vue-router';

import About from './components/pages/About.vue';
import NotFound from './components/pages/NotFound.vue';
import Trending from './components/pages/Trending.vue';
//import Login from './components/Login.vue';
import Artist from './components/Artist.vue';
import SearchMovies from './components/SearchMovies.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: "SearchMovies" } },
    { path: '/movies', component: SearchMovies, name: "SearchMovies" },
    { path: '/trending', component: Trending },
    { path: '/artist/:id', component: Artist, name: "Artist" },
    { path: '/about', component: About },
    //{ path: '/login/:requestToken?', component: Login },
    { path: '*', component: NotFound, props: { msg: "Cannot find the page you requested" } }
  ]
});
