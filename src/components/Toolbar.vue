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
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <router-link to="/"
              ><b-icon icon="house-door-fill"></b-icon>
            </router-link>
          </b-button>
        </b-navbar-nav>
        <b-navbar-nav id="botao">
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <router-link
              to="/#contatos"
              v-scroll-to="{ el: '#contatos', lazy: true, duration: 1000 }"
              >Contatos
            </router-link>
          </b-button>
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <router-link
              to="/#local"
              v-scroll-to="{ el: '#local', lazy: true, duration: 1000 }"
              >Localização
            </router-link>
          </b-button>
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <a
              href="https://www.youtube.com/channel/UCqd6-sIiqEy615sfD974_9g"
              target="new"
              >Youtube</a
            >
          </b-button>
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <a href="https://www.instagram.com/pilatescomclara/" target="new"
              >Instagram</a
            >
          </b-button>
          <b-button size="sm" class="my-2 my-sm-2 ml-2">
            <router-link to="/fotos"> Fotos </router-link>
          </b-button>
          <div class="dropdown">
            <b-button size="sm" class="my-2 my-sm-2 ml-2 dropbtn"
              ><b-icon icon="list"></b-icon
            ></b-button>
            <div id="drop-cnt" class="dropdown-content">
              <router-link to="/fisio"> Fisioterapia </router-link>
              <router-link to="/pilates"> Pilates </router-link>
              <router-link to="/acupuntura"> Acupuntura</router-link>
            </div>
          </div>
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
  transition: 0.3s;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #7d9c96;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #fff;
}
#drop-cnt a:hover {
  color: #7d9c96;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.navbar-light .navbar-toggler-icon {
  background-image: url(/src/assets/ellipsis-v-solid.svg);
}

#botao a {
  text-decoration: none;
  color: #fff;
  display: block;
}

#botao .btn-secondary:hover {
  background-color: #86b198;
}
</style>
