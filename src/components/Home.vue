<template>
  <div id="container">
    <img :src="require('../assets/Marca.png')" />
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>

<style lang="css">
img {
  margin: 0 auto;
}

#container {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  #container img{
    max-width: 90%;
  }
}
</style>
