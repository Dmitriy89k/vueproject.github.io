<template>
    <div class="slider">
      <v-card
    elevation="30"
    max-width="600px"
    class="mx-auto"
  >
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in banners"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>

  </v-carousel>
  </v-card>
  </div>
</template>

<script>
export default {
  props: [
    'banners'
  ]
}
</script>

<style lang="css" scoped>
.slider{
  text-align: center;
}
</style>
