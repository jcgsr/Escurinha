<template>
  <div id="sobre">
    <h3 class="mt-2">Quem é Clara Azevedo?</h3>
    <img class="mt-4" :src="require('../assets/Escurinha-quem.jpeg')" />

    <div class="texto mt-4 animate__animated animate__backInUp">
      Sou Fisioterapeuta, especialista com formação internacional no método
      Pilates e acupunturista. Visualizo a minha profissão como missão,
      ajudar ao próximo é o meu propósito de vida e com muito estudo,
      dedicação e afeto cuido de cada vida que me é confiada!
    </div>
    <div class="services">
      <b-card
      class="mt-5 animate__animated animate__bounceInLeft card shadow p-3 bg-blue rounded"
      title="POR QUE DEVO FAZER PILATES?"
      id="pilates"
      rounded
      >
      <b-card-text class="card-text">
        Porque trabalha o corpo de forma global, traz conexão entre corpo -
        mente - espírito, possibilita FORTALECIMENTO dos músculos,
        FLEXIBILIDADE E MOBILIDADE das articulações, proporcionando assim uma
        perfeita CONSCIÊNCIA E CONTROLE dos movimentos.
      </b-card-text>
    </b-card>
    <b-card
    class="mt-5 animate__animated animate__bounceInUp card shadow p-3 bg-blue rounded"
    title="COMO FUNCIONA A ACUPUNTURA?"
    id="acupuntura"
    >
    <b-card-text class="card-text">
      É uma técnica milenar Chinesa, que tem como objetivo EQUILIBRAR AS
      ENERGIAS do indivíduo. Através das agulhas, pontos específicos são
      estimulados a fim de TRATAR E PREVENIR DOENÇAS, promovendo saúde e bem
      estar completo.
    </b-card-text>
  </b-card>
  <b-card
  class="mt-5 animate__animated animate__bounceInRight card shadow p-3 bg-blue rounded"
  title="QUANDO DEVO PROCURAR UM FISIOTERAPEUTA?"
  id="fisio"
  >
  <b-card-text class="card-text">
    Se você tem qualquer tipo de lesão, sente dor ou até mesmo pretende
    prevenir o adoecimento, então este é o momento para me procurar!
    Reabilitar e prevenir as alterações cinético-funcionais são os meus
    objetivos. Utilizo de técnicas como Liberação miofascial,
    Ventosaterapia, Dry Needling e Acupuntura de forma inteligente e
    segura para lhe devolver alívio e bem-estar.
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
  color: #86b198;
}

#sobre img {
  margin: 0 auto;
  width: 350px; 
  
}

#sobre h3 {
  font-weight: bolder;
  color: #86b198;
}

#sobre {
  color: #86b198;
}

.card-text {
   color: #86b198;
}

.card + .card {
  margin-left: 0.5rem;
}

.card-title {
  font-weight: 700;
  color: #86b198;
}
.services {
  display: flex;
  width: 55%;
  margin: 0 auto;
  padding-bottom: 5rem;
  flex-direction: column;
}
  /* 
.parallax {


  * The image used 
  background-image: url("../assets/Escurinha-quem.jpeg");

  * Set a specific height 
  height: 700px;
  width: 55%;
  margin: 0 auto;

  * Create the parallax scrolling effect 
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 80%;

}
*/

#sobre {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  .texto {
    width: 90%;
  }

  #sobre h3 {
    font-size: 1.4rem;
  }

  #sobre img {
  margin: 0 auto;
  width: 70%; 
  
}

  .card-title {
    font-size: inherit;
    font-weight: 700;
  }

  .services {
    width: 90%;
  }

  .services b-card {
    font-size: .5rem;
  }

 /* .parallax {
    height: 400px;
    width: 90%;
    background-size: 80%;
    background-position: center;
  }*/
}

@media only screen and (max-width: 768px) {
  .services {
    flex-direction: column;
    width: 80%;
  }

  .texto {
    width: 80%;
  }

  .parallax {
    height: 400px;
    width: 90%;
    background-size: 95%;
    background-position: center;
  }
  @media only screen and (max-width: 325px) {
  }
  .parallax {
    background-position: bottom;
  }
}
</style>
