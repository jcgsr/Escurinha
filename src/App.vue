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

export default {
  name: "App",

  components: {
    Toolbar, Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css">
html,
*,
body {
  color: #86b198;
  
}
</style>