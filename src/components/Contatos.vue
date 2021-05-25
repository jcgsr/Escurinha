<template>
  <div id="contatos">
    <h1 class="mt-2 mb-8">Contatos</h1>
    <div class="contato">
      <a
        class="animate__animated animate__tada"
        target="new"
        href="mailto:pilatescomclara@gmail.com"
        ><i class="far fa-envelope"></i
      ></a>
      <a class="animate__animated animate__tada" :href="linkWhatsapp"
        ><i class="fab fa-whatsapp"></i
      ></a>
      <a class="animate__animated animate__tada" :href="linkFB"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a class="animate__animated animate__tada" :href="linkInsta"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkWhatsapp: "https://api.whatsapp.com/send?phone=5579999652202&text=",
      linkFB: "https://www.facebook.com/clara.azevedo.52687506",
      linkInsta: "https://www.instagram.com/pilatescomclara/",
    };
  },
};
</script>

<style lang="css">
#contatos {
  margin: 0 auto;
  text-align: center;
  background-color: #86b198;
  width: 100%;
  padding-top: 2rem;
  color: #fff;
}

#contatos h1 {
  color: #fff;
}

.contato {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}

.contato a {
  color: #fff;
  transition: 0.3s;
  text-align: center;
  padding: 1rem;
  font-weight: bolder;
  font-size: 2rem;
}

.contato a:hover {
  text-decoration: none;
  color: #7d9c96;
}
h1 {
  padding-bottom: 2rem;
  color: #fff;
}

.contato i {
  font-size: 3rem;
  color: #fff;
  transition: 0.3s;
}

i:hover {
  color: #7d9c96;
}

@media only screen and (max-width: 456px) {
  .contato {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    margin: 0 auto;
  }

  .contato a {
    font-size: 1.2rem;
  }
}
</style>
