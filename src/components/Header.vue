<template lang="html">
  <div class="header">
    <v-toolbar>
      <v-toolbar-title>The music database <i class="fas fa-headphones-alt"></i></v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text><router-link class="router-link" to="/movies">Music</router-link></v-btn>
        <v-btn text><router-link class="router-link" to="/trending">Top raited</router-link></v-btn>
        <v-btn v-if="!this.$store.state.authorized" text color="success" @click="login()">Login</v-btn>
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

export default {
  name: 'Header',
  data: () => ({
    key: key,
  }),
  methods: {
    login() {
      axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.key}`)
        .then(response => {
          window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:8080/login/${response.data.request_token}`, "_self");
        })
    },
    logout() {
      localStorage.removeItem('sessionId');
      this.$store.commit('setAuthorized', false);
    }
  },
  mounted() {
    let sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      this.$store.commit('setAuthorized', true);
      axios.get(`https://api.themoviedb.org/3/account?api_key=${this.key}&session_id=${sessionId}`)
        .then(response => this.$store.commit('setUsername', response.data.username))
    }
  }
}
</script>

<style lang="css" scoped>
.router-link {
  text-decoration: none;
}
</style>
