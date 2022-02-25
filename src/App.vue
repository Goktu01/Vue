<template>
  <div class="bg-image">
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.sbg-image {
  background-image: url("https://wallpaperaccess.com/full/1912396.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>  
