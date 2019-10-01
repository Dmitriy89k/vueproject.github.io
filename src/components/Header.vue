<template lang="html">
  <div class="header">
    <v-toolbar>
      <v-toolbar-title>The music database <i class="fas fa-headphones-alt"></i></v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text><router-link class="router-link" to="/movies">Home</router-link></v-btn>
        <v-btn text><router-link class="router-link" to="/signin">Sing In</router-link></v-btn>
        <v-btn v-if="!this.$store.state.authorized" text color="success" @click="login()">Sing In</v-btn>
        <div v-else>
          <p>{{ $store.state.username }}</p>
          <v-btn text color="error" @click="logout()">Logout</v-btn>
        </div>
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
