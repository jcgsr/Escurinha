<template>
   <footer class="footer">
      &copy;{{ footer }} <br />
      {{ footer2 }}
      <Whatsapp />
   </footer>
</template>

<script>
import Whatsapp from "./WhatsApp.vue";
export default {
   data() {
      return {
         footer: "2020 - Clara Azevedo",
         footer2: "Fisioterapeuta",
      };
   },
   components: {
      Whatsapp,
   },
};
</script>

<style lang="css">
footer {
   text-align: center;
   background-color: #7d9c96;
   padding: 0.6rem;
   color: #fff;
}
</style>
