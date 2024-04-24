<template>
  <v-row
    align="center"
    justify="center">
    <v-col>
      <h1 class="titre">VERTI'APP</h1>
      <div class = "centre">
      <img class="logo" src="../assets/verti.png" alt="Logo de l'application"><br><br>
      </div>
      <h3 class="description">Pour une meilleure prise en charge des vertiges </h3><br>
      <div class = "centre"><v-btn class="bouton"
             size="x-large"
             rounded="xl"
             variant="elevated"
             to="/PageDrapeauxRouges">
        Commencer
      </v-btn>
     </div>
    </v-col>
  </v-row>
</template>

<script setup>
//
</script>

<style scoped>
.centre{
  text-align: center;
}

.titre{
  color:#20285F;
  font-family: Manjari;
  font-size: 60px;
  font-weight: 70;
  line-height: 70px;
  letter-spacing: 0em;
  top: 1500px;
  text-align: center;
}

.description{
  font-family: Manjari;
  color:#20285F;
  font-size: 28px;
  font-weight: 70;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  bottom: 800px;
}

.logo{
  width: 207px;
  height: 184px;
  top: 228px;
  left: 92px;
}

.bouton{
  background-color: #20285F;
  color: white;
}

</style>
