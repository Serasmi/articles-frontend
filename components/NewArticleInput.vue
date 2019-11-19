<template>
  <v-flex class="d-flex align-center">
    <v-text-field
      label="Article link"
    ></v-text-field>
    <v-btn color="orange" fab small dark class="ml-3">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
  export default {
    data () {
      return {
        link: ''
      }
    },
  }
</script>
