<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar @searchMovie="searchMovie"/>
    <TopAlbums @topAlbums="topAlbums"/>
  <v-layout justify-center align-center>
        <ul>
          <li v-for="artist in artists">
            <img :src="artist.strArtistThumb"><br>
            <v-btn @click="goToArtists(artist.idArtist)">View {{artist.strArtist}} details </v-btn>
              <TopAlbums @topAlbums="topAlbums"/>
         </li>
        </ul>
  </v-layout>
</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Slider from './Slider';
import Artist from './Artist';
import SingIn from './SingIn';
// import Movie from './Movie.vue';
import axios from 'axios';
import key from '../key.js';
import TopAlbums from "./TopAlbums";

export default {
  name: 'SearchMusic',
  components: {
      TopAlbums,
    SearchBar,
    Slider,
    Artist,
    SingIn
    // Movie
  },
  data: () => ({
    artists: [],
      loved: [],
    key: key,
  }),
  methods: {
    searchMovie(word) {
      axios.get(`http://theaudiodb.com/api/v1/json/${this.key}/search.php?s=${word}`)
        .then((response)=>{
          this.artists = response.data.artists
        });
    },

      topAlbums(){
          axios.get(`theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
              .then((response) => {this.loved = response.data.loved});
      },

    goToArtists(id) {
      this.$router.push({ name: "Artist", params: {'id': id } })
    }
  },
}
</script>

<style lang="css" scoped>

li {
  list-style-type: none;
  text-align: center;
}

img {
  max-width: 200px;
}
</style>
