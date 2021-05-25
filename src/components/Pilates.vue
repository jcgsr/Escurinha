<template>
  <b-container class="mb-4 pilates">
    <h1 class="mt-4">POR QUE PRATICAR PILATES ONLINE?</h1>
    <img
      class="mt-4 animate__animated animate__bounceInRight"
      :src="require('../assets/Escurinha-pilates.jpeg')"
    />
    <b-row>
      <b-col>
        <b-card
          class="mt-5 animate__animated animate__bounceInRight card shadow p-3 bg-blue rounded"
        >
          <b-card-text class="card-text">
            <p data-aos="fade-right">
              Porque é um método de atividade física desenvolvido para trabalhar
              o ser humano como um todo, como filosofia de vida, onde corpo,
              mente e espírito estão conectados.
            </p>
            <p data-aos="fade-left">
              Possibilita o fortalecimento de músculos importantes, desenvolve a
              flexibilidade e mobilidade para realizar movimentos do dia a dia
              sem desconforto, proporcionando autocontrole, consciência e
              concentração.
            </p>
            <p data-aos="fade-right">
              A modalidade feita de forma Online te permite cuidar do seu corpo
              de forma segura sem se expor ao vírus. Como o pilates foi
              desenvolvido inicialmente com exercícios físicos feitos com o peso
              do próprio corpo, o fato de não estar em um studio não é um
              problema, além disso as aulas podem ser diversificadas com auxílio
              de alguns acessórios sendo eles bolinhas e faixas elásticas, mas
              se você não tiver nenhum desses dispositivos, é possível fazer uma
              adapatação dos exercícios com cadeira, cabo de vassoura e ate
              mesmo uma toalha, objetos que se tem com facilidade em casa. Aulas
              são ministradas por mim, tem duração de 50 minutos e é feita por
              vídeo chamada
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
        >EU QUERO PRATICAR PILATES</b-button
      >
    </a>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      linkWhatsapp:
        "https://api.whatsapp.com/send?phone=5579999652202&text=Quero praticar pilates com você, Clara!",
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

.pilates img {
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
.pilates {
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
  .pilates img {
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
