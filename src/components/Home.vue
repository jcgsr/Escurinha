<template>
  <b-container>
    <img :src="require('../assets/Marca.png')" />
    <div class="fotos-menu">
      <div id="home">
        <h2>Quem sou eu?</h2>
        <img
          class="mt-1"
          :src="require('../assets/Escurinha-quem.jpeg')"
        />
        <b-row class="texto mt-4 animate__animated animate__backInUp">
          <p class="mt-4" data-aos="fade-right">
            Sou Clara Azevedo e eu ajudo a transformar a vida das pessoas
            através da fisioterapia: esta é a minha missão.
          </p>
          <p>
            Para a maioria das pessoas a fisioterapia se resume a “choquinhos”,
            massagens ou até mesmo respirar fundo. Porém a fisioterapia é muito
            mais do que isso, somos excepcionais em usar nosso conhecimento para
            dar uma nova oportunidade para as pessoas, devolvendo função e
            independência durante a reabilitação e prevenção de saúde.
          </p>
          <p data-aos="fade-left">
            <strong><i>‘Mens sana in corpore sano’</i></strong
            ><br />
            Para o poeta romano Juvenal, “mente sã num corpo são” é o que as
            pessoas deveriam desejar na vida. Para mim, corpo, mente e espírito
            estiveram sempre interligados. Viver uma vida plena, livre dos
            ansiolíticos, anti-inflamatórios e analgésicos é o que todos querem,
            e algumas pessoas até acham que nunca mais vão poder realizar
            atividades do dia-a-dia após passarem por algum problema de saúde.
          </p>
          <p data-aos="fade-right">
            É impressionante como as dores corporais podem estar relacionadas a
            um estado emocional desequilibrado. Pessoas que sofrem com depressão
            e ansiedade, por exemplo, podem sofrer com dores nas corpo. Daí
            começam a tomar diversos remédios para essas dores, mas, no entanto,
            não cuidam do que está causando tudo isso: a mente. Por isso decidi
            estudar o ser humano por completo através das áreas da fisioterapia.
          </p>
          <p data-aos="fade-left">
            Desde a minha graduação, busquei aprender com os melhores
            profissionais para me tornar uma fisioterapeuta qualificada e
            humanizada, pratica que continuo até hoje pois sei da importância do
            estudo
          </p>
          <p data-aos="fade-right">
            Com a fisioterapia eu aprendi que o corpo é a nossa casa, e é
            preciso cuidar do seu templo para ser uma pessoa melhor.
          </p>
          <p data-aos="fade-left">
            Com o Pilates eu entendi que o exercício físico feito de forma
            consciente pode ajudar a te manter em equilíbrio durante as
            adversidades do dia a dia, e que respirar é um ato de profunda
            conexão com o que é verdadeiramente essencial.
          </p>
          <p data-aos="fade-right">
            Com a acupuntura compreendi o por que os chineses vivem mais, e como o estilo de vida e o conhecimento milenar oriental pode mudar de forma positiva a sua saúde proporcionando a tão sonhada longevidade.
          </p>
          <p data-aos="fade-left">
            Deixo abaixo um mini currículo com cursos e vivências que tive durante esse caminho:
            <ul>
              <li>Fisioterapeuta pela Universidade Tiradentes</li>
              <li>Pós- graduanda em Medicina Chinesa - Acupuntura pelo Instituto HIB</li>
              <li>Instrutora de Pilates pela Active Pilates Brasil</li>
              <li>Cursos de atualização em Pilates Internacional - Canadá</li>
              <li>
                Curso de Programa de alta performance na abordagem da dor lombar pela Active Curso
              </li>
              <li>
                Curso de Dry needling e síndrome dolorosa miofascial pela SBF
              </li>
              <li>
                Participação em cursos e congressos regionais e internacionais
              </li>
            </ul>
          </p>
      </b-row>
        </div>
      <div class="links mt-5" data-aos="zoom-in">
        <router-link to="/sobre">
          <img :src="require('../assets/Escurinha-fisio.jpeg')" />
        </router-link>
        <div class="top-right mb-3">
          Quando devo procurar um fisioterapeuta?
        </div>
      </div>

      <div class="links" data-aos="zoom-in">
        <router-link to="/sobre">
          <img :src="require('../assets/Escurinha-pilates.jpeg')" />
        </router-link>
        <div class="top-right mb-3">Por que devo fazer pilates?</div>
      </div>

      <div class="links mt-5 mb-5" data-aos="zoom-in">
        <router-link to="/sobre">
          <img :src="require('../assets/Escurinha-acupuntura.jpeg')" />
        </router-link>
        <div class="top-right mb-3">Como funciona a acupuntura?</div>
      </div>
    </div>
    <Contatos id="contatos" data-aos="flip-up" />
    <Local id="local" class="mt-5" data-aos="flip-down" />
  </b-container>
</template>

<script>
import Contatos from "./Contatos"
import Local from "./Local"
export default {
  name: "Home",
  components: {
    Contatos, Local
  },

  data: () => ({}),
};
</script>

<style scoped lang="css">
img {
  margin: 0 auto;
  width: 100%;
}

.fotos-menu {
  width: 70%;
  margin: 0 auto;
}

.top-right {
  color: #86b198;
}
#home p {
  color: #86b198;
  text-align: left;
  width: 100%%;
  font-size: 1.2rem;
}

#home img {
  width:  100%;
  height:  100%;
}

#home i {
  color: #86b198;
}

#home h2 {
  color: #86b198;
}

#home ul li {
  color: #86b198;
}

.fotos-menu img {
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

.container {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  .fotos-menu img {
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    height: 100px;
    width: 100px;
  }

  .links {
    font-size: 1.5rem;
  }
  
}
</style>
