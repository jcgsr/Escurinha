<template>
  <div id="container">
    <img :src="require('../assets/EscurinhaCapa.png')" />
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
  width: 100%;
}

#container {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  #container {
    padding-bottom: 30rem;
  }
}
</style>
