<template>
  <h1>{{verti.libelle}}
     {{verti.id_reponse1}}
     {{verti.non}}</h1>
  <v-btn @click="redirection">bouton</v-btn>
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
      fetch(`http://localhost:8989/verti/getLibelle/1`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          this.verti = data;
        })
        .catch(error => {
          console.error('Error fetching verti:', error);
        });
    },
    redirection() {
      console.log("ça marche pas");
    }
  }
  };

</script>

<style>
</style>

