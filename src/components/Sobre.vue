<template>
  <div id="sobre">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="mb-6 display-2">Clara Azevedo</h1>
          <v-parallax
            class="foto animate__animated animate__backInDown"
            height="500"
            src="../assets/Escurinha6.jpg"
          ></v-parallax>
          <!-- <v-img
            :src="require('../assets/Escurinha2.jpeg')"
            class="my-3"
            contain
            height="400"
          /> -->
        </v-col>
      </v-row>
      <div class="texto mt-2">
        Sou aracajuana, tenho 24 anos e como vocês já perceberam, sou muito
        sonhadora, faço dos meus sonhos uma meta e, para mim, realiza-los é um
        dos propósitos da vida. Meus amigos e familiares costumam dizer que além
        de sonhadora sou amorosa, bem humorada e determinada, e é assim que
        vivo, tentando sempre ver o lado positivo e me divertindo durante a
        jornada. Eu adoro uma aventura, desafios me impulsionam a dar o meu
        melhor, e assim sou na profissão, que com muita dedicação e afetividade
        tento dar a atenção devida a cada vida que me é confiada.
      </div>
    </v-container>
  </div>
</template>

<style lang="css">
.texto {
  width: 60%;
  margin: 0 auto;
}

.foto {
  width: 60%;
  margin: 0 auto;
}

.v-parallax__image {
  width: 100%;
}

@media only screen and (max-width: 456px) {
  .foto {
    width: 90%;
  }
  .texto {
    width: 90%;
  .v-parallax__image {
    width: 100%;
  }
}
</style>