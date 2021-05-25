<template>
  <b-container class="mb-4 acu">
    <h1 class="mt-4">COMO FUNCIONA A ACUPUNTURA?</h1>
    <img
      class="mt-4 animate__animated animate__bounceInRight"
      :src="require('../assets/Escurinha-acupuntura.jpeg')"
    />
    <b-row>
      <b-col>
        <b-card
          class="mt-5 animate__animated animate__bounceInRight card shadow p-3 bg-blue rounded"
        >
          <b-card-text class="card-text">
            <p data-aos="fade-right">
              É uma técnica milenar chinesa, que tem como objetivo principal
              equilibrar energias do indivíduo, tratando e prevenindo doenças,
              promovendo assim saúde e bem estar.
            </p>
            <p data-aos="fade-left">
              De acordo com os meridianos, que são canais de energia mapeados
              por todo o seu corpo, eu utilizo a aplicação de agulhas em pontos
              específicos, com grande concentração de terminações nervosas
              sensoriais, para estimular o sistema nervoso central,
              possibilitando assim o reequilíbrio energético de todo o corpo.
            </p>
            <p data-aos="fade-right">
              Além das agulhas, o uso de ventosaterapia, auriculoterapia, stiper
              e moxabustão fazem parte da Medicina Oriental, a qual é estudado
              por muitos anos, técnicas para promover saúde vital e próspera.
            </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <a class="animate__animated animate__tada" :href="linkWhatsapp">
      <b-button
        variant="info"
        size="lg"
        class="mt-4 animate__animated animate__bounceInRight"
        >EU QUERO FAZER UMA SESSÃO DE ACUPUNTURA</b-button
      >
    </a>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      linkWhatsapp:
        "https://api.whatsapp.com/send?phone=5579999652202&text=Quero fazer acupuntura com você, Clara!",
    };
  },
};
</script>

<style scoped lang="css">
.card-text {
  width: 70%;
  margin: 0 auto;
  font-size: 1.5rem;
}

.acu img {
  margin: 0 auto;
  width: 70%;
}
.card-text p {
  color: #86b198;
  text-align: left;
}
.card-text strong {
  color: #86b198;
}
.acu {
  text-align: center;
  margin: 0 auto;
}
/*.btn {
  background-color: #7d9c96;
  font-weight: bold;
}

.btn:hover {
  background: #fff;
  color: #7d9c96;
}*/

@media only screen and (max-width: 456px) {
  .acu img {
    margin: 0 auto;
    width: 70%;
  }
  .card-text {
    width: 90%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
}

@media only screen and (max-width: 768px) {
  .card-text {
    width: 90%;
    margin: 0 auto;
    font-size: 1.3rem;
  }
}
</style>
