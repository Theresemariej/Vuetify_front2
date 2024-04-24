<template>

  <v-container>
    <v-row
      align="center"
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
        <br><br><br>
        <h3 style="font-family: Manjari; color: #20285F">{{verti.libelle}}</h3>
        <br><br><br>

        <v-btn-toggle color="deep-purple-accent-3">
          <div class = esp></div><div class = esp></div><div class = esp></div>
          <v-btn class="bouton"
                 size="x-large"
                 rounded="xl"
                 variant="elevated"
                 to="/PageHints"
                 style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            {{ verti.oui }}
          </v-btn>
          <div class = esp></div>
          <v-btn class="bouton"
                 size="x-large"
                 rounded="xl"
                 variant="elevated"
                 to="/depart"
                 style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            {{verti.non}}
          </v-btn>
        </v-btn-toggle>

        <br><br><br><br><br><br><br>

        <v-row
          align="end" >
          <div class = esp></div><div class = esp></div><div class = esp></div>
          <v-btn rounded="xl" to="/PageVertigesMaintenant">retour</v-btn>
          <div class = esp></div>
          <v-btn rounded="xl" to="/Hints">passer</v-btn>
        </v-row>
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
          non: null
        }
      ]
    };
  },
  mounted() {
    this.fetchVerti();
  },
  methods: {
    fetchVerti() {
      fetch(`http://localhost:8989/verti/getLibelle/4`, {
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
.esp{
  width: 10px;
}
.bouton{
  background-color: #CFCFCF;
  color: #20285F;
  border: 4px solid #20285F;
  font-size: 30px;
}

</style>

