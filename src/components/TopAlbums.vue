
<template lang="html">

    <v-container grid-list-xs,sm,md,lg,xl>
        <h2 style="text-align: center">TOP albums of all time</h2>
        <v-layout row  justify-space-between>

            <v-flex xs12 sm6 md4 lg3 v-for="love in loved">
                <v-hover v-slot:default="{ hover }">
                    <v-card flat class="text-xs-center ma-5"
                            :elevation="hover ? 12 : 2"
                            @click="goToArtists(loved.idArtist)"
                >
                      <div class="albums">
                        <p style="font-weight: bold">{{ love.strArtist }}</p>
                        <p>{{ love.strAlbum }}</p>
                         <img v-if="love.strAlbumCDart" :src= "love.strAlbumCDart">
                      </div>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import Artist from './Artist';

 export default {
     name: 'TopAlbums',


     data: () => ({
         loved: []
     }),

     methods: {
         goToArtists(id) {
             this.$router.push({
                 name: "Artist",
                 params: {'id': id }
             })
         }
     },

   computed: {
       filterAlbumImg(){
           // let albumImg = [];
           // albumImg.push(this.loved.strAlbumCDart);
           return this.loved.strAlbumCDart.filter(item => item !=="")

       }
   },



   mounted(){
         axios.get(`http://theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
             .then((response) => {

              /*   response.data.loved.filter(Boolean)*/
                 //console.log(response)
                 this.loved = response.data.loved


/*                 this.loved.filter(x => {
                     console.log(!!x.strAlbumCDart)
                     !!x.strAlbumCDart
                 })*/
                 //console.log(this.loved)
                // console.log(response.data.loved)
                // console.log(response.data.loved)
             });

     }
 }
</script>

<style lang="css" scoped>
    img {
        max-width: 200px;
        margin-bottom: 10px;
    }
    .albums{
        padding-top: 10px;
        justify-content: center;
        text-align: center;
    }
</style>
