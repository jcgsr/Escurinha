<template>
  <footer class="footer">
    &copy;{{ footer }} <br />
    {{ footer2 }}
   </footer>
</template>

<script>
export default {
   data() {
      return {
         footer: '2020 - Clara Azevedo',
         footer2: "Fisioterapeuta",
         msg: 'Site criado e desenvolvido por ',
         link: '"https://jcgsr.github.io/",'
      }
   }
}
</script>

<style lang="css">
   footer {
      text-align: center;
      background-color: #7d9c96;
      padding: 0.6rem;
      color: #fbf17e;
   }

   .foot {
      font-size: small;
      padding: 0.5rem;
      color: #fbf17e;
   }

   .foot a:link {
      text-decoration: none;
   }

   .foot a {
      font-size: .6rem;
   }
</style>
