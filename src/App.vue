<template>
  <div id="app">
    <Toolbar />
    <main>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

let ROOT_PATH = "https://claraazevedo.com.br/";
export default {
  name: "App",
  components: {
    Toolbar,
    Footer,
  },
  data() {
    return {
      logo: ROOT_PATH + require("./assets/Marca.png"),
    };
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "Clara Azevedo";
      },
      immediate: true,
    },
  },
  metaInfo() {
    return {
      meta: [
        {
          name: "description",
          content:
            "Clara Azevedo é fisioterapeuta com experiência internacional. Trabalha também com Pilates e Acupuntura em Aracaju-SE.",
        },
        // Twitter Card
        { name: "twitter:card", content: "Clara Azevedo" },
        {
          name: "twitter:title",
          content: "Site de Clara Azevedo - Fisioterapeuta",
        },
        {
          name: "twitter:description",
          content: "Site de Clara Azevedo",
        },
        // image must be an absolute path
        { name: "twitter:image", content: this.logo },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Site de Clara Azevedo - Fisioterapeuta",
        },
        { property: "og:site_name", content: "Clara Azevedo" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.logo },
        { property: "og:image:width", content: "400" },
        { property: "og:image:height", content: "300" },
        {
          property: "og:description",
          content: "Site de Clara Azevedo",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
html,
*,
body {
  color: white;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
