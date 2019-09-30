<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar @searchMovie="searchMovie"/>
  <v-layout justify-center align-center>
    <ul>
      <li v-for="artist in artists">
        <v-btn @click="goToArtists(artist.idArtist)">View {{artist.strArtist}} details </v-btn>
      </li>
    </ul>

    <!-- <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id"> -->
      <!-- <v-card  flat class="text-xs-center ma-3" height="98%"> -->
        <!-- <Movie
          :id="movie.id"
          :popularity="movie.popularity"
          :posterPath="movie.poster_path"
          :backdropPath="movie.backdrop_path"
          :originalTitle="movie.original_language"
          :title="movie.title"
          :voteAverage="movie.vote_average"
          :overview="movie.overview"
          :releaseDate="movie.release_date"
        /> -->
        <!-- <v-btn @click="goToMovie(movie.id)">open</v-btn> -->
      <!-- </v-card> -->
    <!-- </v-flex> -->
  </v-layout>
</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Slider from './Slider';
// import Movie from './Movie.vue';
import axios from 'axios';
import key from '../key.js';

export default {
  name: 'SearchMusic',
  components: {
    SearchBar,
    Slider
    // Movie
  },
  data: () => ({
    artists: [],
    key: key,
  }),
  methods: {
    searchMovie(word) {
      axios.get(`http://theaudiodb.com/api/v1/json/${this.key}/search.php?s=${word}`)
        .then((response)=>{
          this.artists = response.data.artists
        });
    },
    goToArtists(id) {
      this.$router.push({ name: "Artist", params: {'id': id } })
    }
  },
  mounted() {
    //console.log(this.$store.state.authorized)
  }
}
</script>

<style lang="css" scoped>
</style>
