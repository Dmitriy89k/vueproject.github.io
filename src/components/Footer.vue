<template lang="html">
  <div class="footer">
  <v-footer
   dark
   padless
 >
   <v-card
     class="flex"
     flat
     tile
   >
     <v-card-title class="teal">
       <strong class="subheading">Get connected with us on social networks!</strong>

       <div class="flex-grow-1"></div>

       <v-btn
         v-for="icon in icons"
         :key="icon"
         class="mx-4"
         dark
         icon
       >
         <v-icon size="24px">{{ icon }}</v-icon>
       </v-btn>
     </v-card-title>

     <v-card-actions class="grey darken-3 justify-center">
       {{ new Date().getFullYear() }} — <strong>Dmitriy Kukshyn</strong>
     </v-card-actions>
   </v-card>
 </v-footer>
</div>
</template>

<script>

export default {
  name: 'Footer',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
}
</script>

<style lang="css">
 .footer{
   position: relative;
   width: 100%;
   bottom:0;
 }
</style>
