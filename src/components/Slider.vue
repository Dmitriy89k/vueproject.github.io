<template>
    <div class="slider">
      <v-card
    elevation="24"
    max-width="500px"
    class="mx-auto"
  >
  <v-carousel height="auto" width="50%">
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
