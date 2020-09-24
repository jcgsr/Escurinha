<template>
  <div>
    <b-navbar id="nav" toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="botao">
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <router-link to="/"> Início </router-link>
          </b-button>
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <router-link to="/sobre"> Sobre </router-link>
          </b-button>
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <router-link to="/cursos"> Cursos </router-link>
          </b-button>
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <a
              href="https://www.youtube.com/channel/UCqd6-sIiqEy615sfD974_9g"
              target="new"
              >Youtube</a
            >
          </b-button>
          <b-button size="sm" class="my-2 my-sm-0 ml-2">
            <router-link to="/contatos"> Contatos </router-link>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css">
#nav {
  background-color: #86b198;
}

#botao .btn-secondary {
  background-color: white;
  font-weight: bolder;
  border-color: blue;  
  transition: 0.3s;
}

#botao a {
  text-decoration: none;
  color: #86b198;  
}

#botao a:hover{
  color: white;
}

#botao .btn-secondary:hover {
  background-color: grey;
  
}
</style>