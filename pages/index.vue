<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container>

      <v-row>
        <v-col>
          <new-article-input />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <articles-list />
        </v-col>
      </v-row>

    </v-container>
  </v-layout>
</template>

<script>
import NewArticleInput from '~/components/NewArticleInput'
import ArticlesList from '~/components/ArticlesList'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    ArticlesList,
    Logo,
    NewArticleInput,
    VuetifyLogo
  }
}
</script>
