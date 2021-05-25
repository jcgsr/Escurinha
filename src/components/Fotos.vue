<template>
  <b-container id="fotos">
    <h2>Fotos</h2>
    <b-row class="coluna" data-aos="fade-up">
      <b-col>
        <img :src="require('../assets/Escurinha-quem.jpeg')" />
      </b-col>

      <b-col>
        <img :src="require('../assets/Escurinha-acupuntura.jpeg')" />
      </b-col>
      <b-col>
        <img :src="require('../assets/Escurinha5.jpg')" />
      </b-col>
    </b-row>

    <b-row class="coluna" data-aos="fade-down">
      <b-col>
        <img :src="require('../assets/Escurinha-pilates.jpeg')" />
      </b-col>
      <b-col>
        <img :src="require('../assets/EscurinhaB1.jpeg')" />
      </b-col>
      <b-col>
        <img :src="require('../assets/EscurinhaB2.jpeg')" />
      </b-col>
    </b-row>
    <b-row class="coluna" data-aos="fade-up">
      <b-col>
        <img :src="require('../assets/EscurinhaB3.jpeg')" />
      </b-col>
      <b-col>
        <img :src="require('../assets/EscurinhaB4.jpeg')" />
      </b-col>
      <b-col>
        <img :src="require('../assets/EscurinhaB5.jpeg')" />
      </b-col>
    </b-row>
    <b-row class="coluna" data-aos="fade-down">
      <b-col>
        <img :src="require('../assets/EscurinhaB6.jpeg')" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped lang="css">
#fotos img {
  width: 100%;
  margin: 0.5rem;
}
#fotos h2 {
  color: #7d9c96;
  text-align: center;
  margin: 2rem;
}
.coluna {
  display: flex;
}
/*.coluna {
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
}*/
@media only screen and (max-width: 456px) {
  .coluna {
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
