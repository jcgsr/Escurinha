<template>
  <b-container class="mb-4 fisio">
    <h1 class="mt-4">SOBRE FISIOTERAPIA</h1>
    <img
      class="mt-4 animate__animated animate__bounceInRight"
      :src="require('../assets/Escurinha-fisio.jpeg')"
    />
    <b-row>
      <b-col>
        <b-card
          class="mt-5 animate__animated animate__bounceInRight card shadow p-3 bg-blue rounded"
        >
          <b-card-text class="card-text">
            <p data-aos="fade-right">
              Reabilitar, prevenir e tratar os distúrbios cinético-funcionais
              decorrentes de alterações no movimento do corpo humano é a minha
              missão como Fisioterapeuta.
            </p>
            <p data-aos="fade-left">
              Utilizo técnicas, métodos e todo o meu conhecimento para resolver
              o seu problema. Como cada indivíduo é único e o raciocínio clínico
              é fundamental para o tratamento, início com uma avaliação precisa
              que me direciona para a estratégia de tratamento ideal para você.
              Sente alguma alteração no seu corpo que te resultou em dor ou
              desconforto físico?
              <strong
                >Se você teve COVID-19 ou conhece alguém que teve e está com
                sequelas</strong
              >. Este é o momento para me procurar!
            </p>
            <p data-aos="fade-right">
              O modelo de Teleatendimento é regularizado, seguro e possível
              nesse momento de pandemia, ofereço o atendimento virtual para os
              pacientes que não podem realizar a consulta domiciliar ou na
              clínica por algum motivo. Tem interesse em ter uma consulta? É só
              clicar no link abaixo!
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
        >EU QUERO MARCAR UMA CONSULTA FISIOTERAPÊUTICA</b-button
      >
    </a>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      linkWhatsapp:
        "https://api.whatsapp.com/send?phone=5579999652202&text=Quero marcar uma consulta com você, Clara!",
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

.fisio img {
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
.fisio {
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
  .fisio img {
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
  .services {
    flex-direction: column;
    width: 80%;
  }

  .texto {
    width: 80%;
  }
}
</style>
