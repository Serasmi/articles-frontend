<template>
  <div v-if="articles.length">
    <v-card v-for="item in articles" class="article mb-2">
      <v-card-title class="title" @click="showEditModal(item.id)">{{
        item.title
      }}</v-card-title>
      <v-card-subtitle class="text-left">
        <a :href="item.link" target="_blank">{{ item.link }}</a>
      </v-card-subtitle>
      <v-card-text class="mt-n4 text-left">
        {{ formatUnixDate(item.createdAt) }}
      </v-card-text>
    </v-card>
  </div>
  <div v-else>
    No articles
  </div>
</template>

<script>
import { formatUnixDate } from '../utils';

export default {
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },
  methods: {
    formatUnixDate: date => formatUnixDate(date),
    showEditModal(id) {
      this.$store.commit('selectArticle', { id });
    }
  },
  mounted() {
    return this.$store.dispatch('getArticles');
  }
};
</script>

<style lang="scss">
.article {
  .title {
    cursor: pointer;
  }
}
</style>
