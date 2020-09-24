<template>
  <div id="cursos">
    <h1 class="mt-2">Cursos</h1>
    <!-- <div class="parallax1 animate__animated animate__backInDown"></div> -->
    <img src="../assets/Escurinha1.jpeg" alt="Foto de Clara Azevedo" />
  </div>
</template>

<style lang="css">
#cursos {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 5rem;
}

#cursos img {
  width: 70%;
}

/* .parallax1 {
  background-image: url("../assets/Escurinha1.jpeg");

  height: 500px;
  width: 70%;
  margin: 0 auto;

  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 70%;
} */

@media only screen and (max-width: 456px) {
  .parallax1 {
    height: 500px;
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 768px) {
    .parallax1 {
      height: 400px;
      width: 90%;
      background-size: cover;
      background-position: top;
    }
  }
}
</style>