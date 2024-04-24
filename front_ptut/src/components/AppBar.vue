<!--  la barre de navigation en haut de l'application -->
<template>
  <v-app-bar
    color=#20285F
    density="dense"
  >

    <!-- menu de gauche -->
    <template v-slot:prepend>
      <v-btn id="historique" icon="mdi-dots-vertical"></v-btn>
    </template>

    <!-- titre de l'application -->
    <v-app-bar-title>VERTI'APP</v-app-bar-title>
    <!-- menu de droite -->
    <template v-slot:append>
      <v-btn id="menu-droite" icon="mdi-cog"></v-btn>
      <!-- le menu s'affichera qd l'élément d'id 'menu-droite' ici 'v-btn' sera activé-->
      <v-menu activator="#menu-droite">
        <v-list>
          <v-list-item to="/PageDrapeauxRouges"> <!-- navigation vers la page "/" -->
            <v-list-item-title>Recommencer</v-list-item-title>
          </v-list-item>
          <v-list-item to="/depart"> <!-- navigation vers la page "/" -->
            <v-list-item-title>Arrêter</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>

</template>

<script setup>
</script>

<style>

</style>

