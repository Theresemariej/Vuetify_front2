<template>
  <v-container>
    <v-row
      align="center"
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
        <h3 style="font-family: Manjari; color: #20285F">{{verti.libelle}}</h3>

        <v-btn-toggle color="deep-purple-accent-3">
          <v-btn class="mr-4"
                 size="x-large"
                 rounded="xl"
                 variant="elevated"
                 to="/PageHints"
                 style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            {{ verti.oui }}
          </v-btn>
          <v-btn class="bouton"
                 size="x-large"
                 rounded="xl"
                 variant="elevated"
                 to="/PageNystagamusSpontanne"
                 style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            {{verti.non}}
          </v-btn>
        </v-btn-toggle>
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
      fetch(`http://localhost:8989/verti/getLibelle/2`, {
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

