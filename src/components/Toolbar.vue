<template>
  <div>
    <b-navbar id="nav" toggleable="lg">  

      <b-navbar-toggle target="nav-collapse">
       <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="three-dots-vertical"></b-icon>
        <b-icon v-else icon="three-dots-vertical"></b-icon>
      </template>
    </b-navbar-toggle>

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
  background-color: #7d9c96;
  font-weight: bolder;
  border-color: #fbf17e;
  transition: 0.3s;
}

.navbar-light .navbar-toggler-icon {
  background-image: url(/src/assets/ellipsis-v-solid.svg);
}

#botao a {
  text-decoration: none;
  color: #fff;
  display: block;
}

#botao a:hover {
  color: #86b198;
}

#botao .btn-secondary:hover {
  background-color: #fbf17e;
}
</style>