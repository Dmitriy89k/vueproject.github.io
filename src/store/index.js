import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import key from '../key.js';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    authorized: false,
    username: ''
  },
  mutations: {
    setAuthorized(state, status) {
      state.authorized = status;
    },
    setUsername(state, username) {
      state.username = username;
    }
  },
  actions: {
    setAuthorization(context, userData) {
      context.commit('setAuthorized', userData.status);
      axios.get(`https://api.themoviedb.org/3/account?api_key=${key}&session_id=${userData.sessionId}`)
        .then(response => context.commit('setUsername', response.data.username))
    }
  }
})
