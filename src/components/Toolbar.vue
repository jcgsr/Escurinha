<template>
  <div id="navbar">
    <v-app-bar app color="green" >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Clara's Marca"
          class="shrink mr-2"
          contain
          src="../assets/Marca.png"
          transition="scale-transition"
          width="40"
        /> -->
      </div>
      <v-btn class="ml-2">
        <router-link class="text-decoration-none" to="/">
          <h6 class="green--text">Início</h6>
        </router-link>
      </v-btn>
      <v-btn class="ml-2">
        <router-link class="text-decoration-none" to="/sobre">
          <h6 class="green--text darken-2">Sobre</h6>
        </router-link>
      </v-btn>
      <v-btn class="ml-2">
        <router-link class="text-decoration-none" to="/sobre">
          <h6 class="green--text darken-2">Cursos</h6>
        </router-link>
      </v-btn>
      <v-btn class="ml-2">
        <router-link class="text-decoration-none" to="/sobre">
          <h6 class="green--text darken-2">Youtube</h6>
        </router-link>
      </v-btn>
      <v-btn class="ml-2">
        <router-link class="text-decoration-none" to="/sobre">
          <h6 class="green--text darken-2">Contatos</h6>
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>