
<template lang="html">
    <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row  justify-space-between>
            <v-flex xs12 sm6 md4 lg3 v-for="love in loved">
                <v-card  flat class="text-xs-center ma-3" height="98%">
                    <img :src="love.strAlbumCDart">
                    <p>{{ loved.strArtist }}</p>
                    <p>{{ loved.Album }}</p>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
 export default {
     name: 'TopAlbums',


     data: () => ({
         loved: []
     }),


 mounted(){
         axios.get(`theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
             .then((response) => {this.loved = response.data.loved});
     }
 }
</script>

<style lang="css" scoped>

</style>
