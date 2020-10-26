<template>
  <div id="cursos">
    <h1 class="mt-2">Cursos</h1>
    <!-- <div class="parallax1 animate__animated animate__backInDown"></div> -->
    <img src="../assets/Escurinha-cursos.jpeg" alt="Foto de Clara Azevedo" />
  </div>
</template>

<style lang="css">
#cursos {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 5rem;
}

h1 {
  color: #86b198;
}

#cursos img {
  margin: 0 auto;
  width: 32rem;
  height: 32rem;
  border-radius: 50%/50%;
}

@media only screen and (max-width: 456px) {
  #cursos img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%/50%;
    
  }
}
</style>