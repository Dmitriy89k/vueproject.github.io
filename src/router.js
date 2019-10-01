import VueRouter from 'vue-router';

import About from './components/pages/About.vue';
import NotFound from './components/pages/NotFound.vue';
import Trending from './components/pages/Trending.vue';
import SignIn from './components/SingIn.vue';
import Artist from './components/Artist.vue';
import SearchArtist from './components/SearchArtist.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: "SearchArtist" } },
    { path: '/music', component: SearchArtist, name: "SearchArtist" },
    { path: '/trending', component: Trending },
    { path: '/artist/:id', component: Artist, name: "Artist" },
    { path: '/about', component: About },
    { path: "/signin", component: SignIn },
    { path: '*', component: NotFound, props: { msg: "Cannot find the page you requested" } }
  ]
});
