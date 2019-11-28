<template>
  <v-flex class="d-flex align-center">
    <v-text-field
      label="Article link"
      v-model="link"
    />
    <v-btn color="orange" fab small dark class="ml-3" v-on:click="addArticle">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
  export default {
    data () {
      return {
        /*link: ''*/
      }
    },
    computed: {
      link: {
        get () {
          return this.$store.state.link
        },
        set (value) {
          this.$store.commit('changeLink', value)
        }
      }
    },
    methods: {
      addArticle () {
        if (!this.link.length) return;

        this.$store.dispatch('addArticle');
      }
    }
  }
</script>
