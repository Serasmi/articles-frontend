<template>
  <v-layout column justify-center align-center>
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

    <edit-modal />
  </v-layout>
</template>

<script>
import ArticlesList from '~/components/ArticlesList';
import EditModal from '~/components/EditModal';
import Logo from '~/components/Logo.vue';
import NewArticleInput from '~/components/NewArticleInput';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

export default {
  components: {
    ArticlesList,
    EditModal,
    Logo,
    NewArticleInput,
    VuetifyLogo
  }
};
</script>
