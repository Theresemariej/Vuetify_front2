<template>
  <v-container>
    <v-row
      align="center"
      justify="center">
      <v-col>
        <div class="centre">
        <VertigoAppBar></VertigoAppBar>
        <h1>Diagnostic:</h1>
        <br><br>
        <h3 style="font-family: Manjari; color: #20285F">{{verti.libelle}}</h3>

        <br><br><br><br><br><br><br><br><br><br>

          <div class = esp></div><div class = esp></div><div class = esp></div>
          <v-btn rounded="xl" to="/PageDrapeauxRouges">retour</v-btn>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>


export default {
  data() {


    return {
      verti: [
        {
          id: null,
          libelle: null,
          oui: null,
          non: null,
          id_reponse1: null,
          id_reponse2: null
        }
      ]
    };
  },
  mounted() {
    this.fetchVerti();
  },
  methods: {
    fetchVerti() {
      fetch(`http://localhost:8989/verti/getLibelle/5`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          this.verti = data;
        })
        .catch(error => {
          console.error('Error fetching verti:', error);
        });
    }
  },
};
</script>

<style>
.centre{
  text-align: center;
}
</style>

