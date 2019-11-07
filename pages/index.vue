<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <articles-list />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ArticlesList from '~/components/ArticlesList'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    ArticlesList,
    Logo,
    VuetifyLogo
  }
}
</script>
