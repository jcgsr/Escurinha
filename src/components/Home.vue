<template>
  <div id="container">
    <img :src="require('../assets/Escurinha-topo.png')" />
    <div class="fotos-menu">

     <div class="links mt-5"> 
      <a href="/sobre/#acupuntura">        
       <img :src="require('../assets/Escurinha-acupuntura.jpeg')" />
     </a>    
     <div class="top-right mb-3">Como funciona a acupuntura?</div>
   </div>

   <div class="links">          
    <a href="/sobre/#pilates">
      <img :src="require('../assets/Escurinha-pilates.jpeg')" />
    </a>
    <div class="top-right mb-3">Por que devo fazer pilates?</div>
  </div>

  <div class="links">          
    <a href="/sobre/#fisio">
      <img :src="require('../assets/Escurinha-fisio.jpeg')" />
    </a>
    <div class="top-right mb-3">Quando devo procurar um fisio?</div>
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

.top-right {
  color: #86b198;
}

.fotos-menu img {
  margin-bottom: .5rem;
  margin-left: .5rem;
  height: 200px;
  width: 200px;  
  border-radius: 50%;
}

#container {
  text-align: center;
}

@media only screen and (max-width: 456px) {

  .fotos-menu img {
    margin-bottom: .5rem;
    margin-left: .5rem;
    height: 100px;
    width: 100px;  
  }


}
</style>
