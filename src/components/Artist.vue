<!-- <template lang="html">
  <div class="artist">
    <div class="about">
      <h1>{{artist.strArtist}}</h1>
      <p>Style: {{artist.strStyle}}</p>
      <p>Genre: {{artist.strGenre}}</p>
      <p>Year: {{artist.intFormedYear}}</p>
      <p>Web: http://{{artist.strWebsite}}</p>
      <Slider v-bind:banners="artistImages"></Slider>
      <div class="aboutArtist"><p>{{artist.strBiographyEN}}</p></div>
    </div>
      <div class="artist_btn">
       <v-btn color="#009688" @click="$router.push({ name: 'SearchArtist' })"><i class="fas fa-undo">Return</i></v-btn>
      </div>
  </div>
</template> -->
<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="#009688" dark>
          <v-card-title primary class="title">
            {{artist.strArtist}}
          </v-card-title>
          <Slider v-bind:banners="artistImages"></Slider>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
        <v-card color="#009688" dark>
          <v-card-text>
            <p>Style: {{artist.strStyle}}</p>
            <p>Genre: {{artist.strGenre}}</p>
            <p>Year: {{artist.intFormedYear}}</p>
            {{artist.strBiographyEN}}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="align-center" mt-3>
        <v-btn color="#009688" @click="$router.push({ name: 'SearchArtist' })"><i class="fas fa-undo">Return</i></v-btn>
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
import Slider from './Slider.vue';
import axios from 'axios';
import key from '../key.js';

export default {
  components: {
    Slider,
  },
  data(){
    return {
      artistId: this.$route.params.id,
      artist: '',
      key: key,
    }
  },
  computed: {
    artistImages(){
      let images = [];
      images.push(this.artist.strArtistThumb);
      // images.push(this.artist.strArtistLogo);
      images.push(this.artist.strArtistClearart);
      images.push(this.artist.strArtistWideThumb);
      images.push(this.artist.strArtistFanart2);
      images.push(this.artist.strArtistFanart3);
      return images.filter(item => item !== null)
    }
  },
  mounted(){
    axios.get(`http://theaudiodb.com/api/v1/json/${this.key}/artist.php?i=${this.artistId}`)
    .then(response => {
      console.log(response.data);
      if (response.data.hasOwnProperty('artists') && response.data.artists.length > 0){
        this.artist = response.data.artists[0];
      }
    })
  }
}
</script>

<style lang="css" scoped>
.artist{
  text-align: center;
  margin-bottom: 100px;
  /* display: flex; */
}

.artist_btn{
  padding: 20px;
}

.aboutArtist {
  /* max-width: 500px; */
  text-align: center;

}

</style>
