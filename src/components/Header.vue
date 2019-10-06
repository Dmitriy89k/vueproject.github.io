<template lang="html">
  <div class="header">
    <v-toolbar>
      <v-toolbar-title><router-link class="router-link" to="/music"><i class="fas fa-headphones-alt"></i></router-link></v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn color="#009688" text><router-link class="router-link" to="/music">Home</router-link></v-btn>
        <v-btn color="#009688" text><router-link class="router-link" to="/signin">Sing In</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import axios from 'axios';
import key from '../key.js';
import SingIn from './SingIn';

export default {
  name: 'Header',
data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
     ]
    }
  },

}
</script>

<style lang="css" scoped>
.router-link {
  text-decoration: none;
}
</style>
