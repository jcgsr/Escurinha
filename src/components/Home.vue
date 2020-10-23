<template>
  <div id="container">
    <img :src="require('../assets/EscurinhaCapa.png')" />
    <div class="fotos-menu">

     <div class="links">          
      <router-link to="/sobre">       
       <img :src="require('../assets/Escurinha2.jpeg')" />
     </router-link>
     <div class="top-right">Sobre</div>
   </div>

   <div class="links">          
    <router-link to="/cursos">       
     <img :src="require('../assets/Escurinha1.jpeg')" />
   </router-link>
   <div class="top-right">Cursos</div>
 </div>

 <div class="links">
   <router-link to="/contatos">        
    <img :src="require('../assets/Escurinha6.jpg')" />
    <div class="top-contato">Contatos</div>
  </router-link>
</div>

</div>
</div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>

<style lang="css">
img {
  margin: 0 auto;
  width: 100%;
}

.fotos-menu {
  width: 70%;  
  margin: 0 auto;
}

.fotos-menu img {
  margin-bottom: .5rem;
  margin-left: .5rem;
  height: 200px;
  width: 200px;  
}

#container {
  text-align: center;
}

@media only screen and (max-width: 456px) {
  #container {
    padding-bottom: 30rem;
  }
  .fotos-menu img {
  margin-bottom: .5rem;
  margin-left: .5rem;
  height: 200px;
  width: 200px;  
}


}
</style>
