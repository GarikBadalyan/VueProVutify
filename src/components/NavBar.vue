<template>
  <v-container fluid>
    <v-app-bar
        color="orange"
        dark
    >
      <v-spacer/>
      <v-btn outlined class="ml-3">
        <router-link to="/"> Glavnaya </router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photo"> Galeria</router-link>
        </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>