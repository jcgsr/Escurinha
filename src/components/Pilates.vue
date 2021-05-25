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
    <div class="page mt-4 mb-4">
      <div class="marvel-device nexus5">
        <div class="screen">
          <div class="chat">
            <div class="chat-container">
              <div class="user-bar">
                <div class="back">
                  <i class="zmdi zmdi-arrow-left"></i>
                </div>
                <div class="avatar">
                  <img :src="require('../assets/Escurinha-fisio.jpeg')" />
                </div>
                <div class="name">
                  <span>Clara Azevedo</span>
                  <span class="status">Fisioterapeuta</span>
                </div>
              </div>
              <div class="conversation">
                <div class="conversation-container">
                  <div class="message received">
                    Olá! Como posso ajudar?
                    <span class="metadata"><span class="time"></span></span>
                  </div>
                </div>
                <form class="conversation-compose">
                  <div class="emoji mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="smiley"
                      x="3147"
                      y="3209"
                      class="mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                        fill="#7d8489"
                      />
                    </svg>
                    Eu quero praticar pilates
                  </div>
                  <a :href="linkWhatsapp">
                    <button class="send">
                      <div class="circle">
                        <i class="zmdi zmdi-mail-send"></i>
                      </div>
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marvel-device .screen {
  text-align: left;
}

.screen-container {
  height: 100%;
}

/* Status Bar */

.status-bar {
  height: 25px;
  background: #004e45;
  color: #fff;
  font-size: 14px;
  padding: 0 8px;
}

.status-bar:after {
  content: "";
  display: table;
  clear: both;
}

.status-bar div {
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 0 0 8px;
  font-weight: 600;
}

/* Chat */

.chat {
  height: calc(100% - 69px);
}

.chat-container {
  height: 100%;
}

/* User Bar */

.user-bar {
  height: 55px;
  background: #005e54;
  color: #fff;
  padding: 0 8px;
  font-size: 24px;
  position: relative;
  z-index: 1;
}

.user-bar:after {
  content: "";
  display: table;
  clear: both;
}

.user-bar div {
  float: left;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}

.user-bar .actions {
  float: right;
  margin: 0 0 0 20px;
}

.user-bar .actions.more {
  margin: 0 12px 0 32px;
}

.user-bar .actions.attachment {
  margin: 0 0 0 30px;
}

.user-bar .actions.attachment i {
  display: block;
  transform: rotate(-45deg);
}

.user-bar .avatar {
  margin: 0 0 0 5px;
  width: 36px;
  height: 36px;
}

.user-bar .avatar img {
  border-radius: 50%;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  display: block;
  width: 100%;
}

.user-bar .name {
  font-size: 17px;
  font-weight: 600;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
  margin: 0 0 0 8px;
  overflow: hidden;
  white-space: nowrap;
  width: 110px;
}

.user-bar .status {
  display: block;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}

/* Conversation */

.conversation {
  height: calc(100% - 12px);
  position: relative;
  background: #efe7dd
    url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg")
    repeat;
  z-index: 0;
}

.conversation ::-webkit-scrollbar {
  transition: all 0.5s;
  width: 5px;
  height: 1px;
  z-index: 10;
}

.conversation ::-webkit-scrollbar-track {
  background: transparent;
}

.conversation ::-webkit-scrollbar-thumb {
  background: #b3ada7;
}

.conversation .conversation-container {
  height: calc(100% - 68px);
  box-shadow: inset 0 10px 10px -10px #000000;
  overflow-x: hidden;
  padding: 0 16px;
  margin-bottom: 5px;
}

.conversation .conversation-container:after {
  content: "";
  display: table;
  clear: both;
}

/* Messages */

.message {
  color: #000;
  clear: both;
  line-height: 18px;
  font-size: 15px;
  padding: 8px;
  position: relative;
  margin: 8px 0;
  max-width: 85%;
  word-wrap: break-word;
  z-index: -1;
}

.message:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
}

.metadata {
  display: inline-block;
  float: right;
  padding: 0 0 0 7px;
  position: relative;
  bottom: -4px;
}

.metadata .time {
  color: rgba(0, 0, 0, 0.45);
  font-size: 11px;
  display: inline-block;
}

.metadata .tick {
  display: inline-block;
  margin-left: 2px;
  position: relative;
  top: 4px;
  height: 16px;
  width: 16px;
}

.metadata .tick svg {
  position: absolute;
  transition: 0.5s ease-in-out;
}

.metadata .tick svg:first-child {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: perspective(800px) rotateY(180deg);
  transform: perspective(800px) rotateY(180deg);
}

.metadata .tick svg:last-child {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: perspective(800px) rotateY(0deg);
  transform: perspective(800px) rotateY(0deg);
}

.metadata .tick-animation svg:first-child {
  -webkit-transform: perspective(800px) rotateY(0);
  transform: perspective(800px) rotateY(0);
}

.metadata .tick-animation svg:last-child {
  -webkit-transform: perspective(800px) rotateY(-179.9deg);
  transform: perspective(800px) rotateY(-179.9deg);
}

.message:first-child {
  margin: 16px 0 8px;
}

.message.received {
  background: #fff;
  border-radius: 0px 5px 5px 5px;
  float: left;
}

.message.received .metadata {
  padding: 0 0 0 16px;
}

.message.received:after {
  border-width: 0px 10px 10px 0;
  border-color: transparent #fff transparent transparent;
  top: 0;
  left: -10px;
}

.message.sent {
  background: #e1ffc7;
  border-radius: 5px 0px 5px 5px;
  float: right;
}

.message.sent:after {
  border-width: 0px 0 10px 10px;
  border-color: transparent transparent transparent #e1ffc7;
  top: 0;
  right: -10px;
}

/* Compose */

.conversation-compose {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
  height: 50px;
  width: 100%;
  z-index: 2;
}

.conversation-compose div,
.conversation-compose input {
  background: #fff;
  height: 100%;
}

.conversation-compose .emoji {
  display: flex;
  align-items: center;
  justify-content: right;
  background: white;
  border-radius: 5px 0 0 5px;
  flex: 0 0 auto;
  margin-left: 8px;
  width: 4remx;
  color: #000;
  text-align: right;
}

.conversation-compose .input-msg {
  border: 0;
  flex: 1 1 auto;
  font-size: 16px;
  margin: 0;
  outline: none;
  min-width: 50px;
}

.conversation-compose .photo {
  flex: 0 0 auto;
  border-radius: 0 0 5px 0;
  text-align: center;
  position: relative;
  width: 48px;
}

.conversation-compose .photo:after {
  border-width: 0px 0 10px 10px;
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  position: absolute;
  width: 0;
  height: 0;
  content: "";
  top: 0;
  right: -10px;
}

.conversation-compose .photo i {
  display: block;
  color: #7d8488;
  font-size: 24px;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
}

.conversation-compose .send {
  background: transparent;
  border: 0;
  cursor: pointer;
  flex: 0 0 auto;
  margin-left: 8px;
  margin-right: 8px;
  padding: 0;
  position: relative;
  outline: none;
}

.conversation-compose .send .circle {
  background: #008a7c;
  border-radius: 50%;
  color: #fff;
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.conversation-compose .send .circle i {
  font-size: 24px;
  margin-left: 5px;
}

/* Small Screens */

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
  .page {
    display: none;
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
