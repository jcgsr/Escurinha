<template>
  <div id="sobre">
    <h1 class="mt-2">Clara Azevedo</h1>
    <div class="parallax animate__animated animate__backInDown"></div>

    <div class="texto mt-2 animate__animated animate__backInUp">
      Sou aracajuana, tenho 24 anos e como vocês já perceberam, sou muito
      sonhadora, faço dos meus sonhos uma meta e, para mim, realiza-los é um dos
      propósitos da vida. Meus amigos e familiares costumam dizer que além de
      sonhadora sou amorosa, bem humorada e determinada, e é assim que vivo,
      tentando sempre ver o lado positivo e me divertindo durante a jornada. Eu
      adoro uma aventura, desafios me impulsionam a dar o meu melhor, e assim
      sou na profissão, que com muita dedicação e afetividade tento dar a
      atenção devida a cada vida que me é confiada.
    </div>
    <div class="services">
      <b-card
        class="mt-5 animate__animated animate__bounceIn"
        title="POR QUE DEVO FAZER PILATES?"
        
      >
        <b-card-text>
          Pilates é um método de atividade física desenvolvido por Joseph
          Pilates, visa trabalhar o ser humano como um todo, mente corpo e
          espirito, é uma filosofia de vida que possibilita fortalecimento,
          flexibilidade, mobilidade, autocontrole e consciência nos movimentos
          do corpo, concentração e equilíbrio na vida.
        </b-card-text>
      </b-card>
      <b-card
        class="mt-5 animate__animated animate__bounceIn"
        title="COMO FUNCIONA A ACUPUNTURA?"
        
      >
        <b-card-text>
          Técnica milenar Chinesa, que tem como objetivo principal equilibrar
          energias do indivíduo, tratando e prevenindo doenças, promovendo assim
          saúde e bem estar.
        </b-card-text>
      </b-card>
      <b-card
        class="mt-5 animate__animated animate__bounceIn"
        title="QUANDO DEVO PROCURAR UM FISIOTERAPEUTA?"
       
      >
        <b-card-text>
          Reabilitar, prevenir e tratar os distúrbios cinético-funcionais
          decorrentes de alterações no movimento do corpo humano. Teve qualquer
          tipo de fratura, lesão ou sente dor? Então este é o momento parar me
          procurar.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<style lang="css">
.texto {
  width: 60%;
  margin: 0 auto;
  font-size: 1.5rem;
}

.services {
  display: flex;
  width: 70%;
  margin: 0 auto;
}

.sub {
  color: #86b198;
}

.parallax {
  /* The image used */
  background-image: url("../assets/Escurinha6.jpg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#sobre {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  .foto {
    width: 90%;
  }
  .texto {
    width: 90%;
  }

  .services {
    flex-direction: column;
    width: 80%;
  }
}
</style>