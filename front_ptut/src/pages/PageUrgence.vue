<template>
  <v-container>
    <v-row
      align="center"
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
        <h1>Diagnostique:</h1>
        <h3 style="font-family: Manjari; color: #20285F">{{verti.libelle}}</h3>
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
</style>

