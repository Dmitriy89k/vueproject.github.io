<template lang="html">
  <div class="artist">
    <v-btn @click="$router.push({ name: 'SearchMovies' })"><i class="fas fa-undo">Return</i></v-btn>
    <div class="info">
      <h1>Artist:{{artist.strArtist}}</h1>
      <p>Style: {{artist.strStyle}}</p>
      <p>Genre: {{artist.strGenre}}</p>
      <p>Year: {{artist.intFormedYear}}</p>
      <p>Web: http://{{artist.strWebsite}}</p>
      <Slider v-if="artistImages.length > 0" v-bind:banners="artistImages"></Slider>
      <div v-else>Opps artist have no images </div>
    </div>
  </div>
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
      return images.filter(item => item !== '')
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
  margin-bottom: 200px;
}
.info{
  background-color: inherit;
}
</style>
