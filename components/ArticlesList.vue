<template>
  <div v-if="items.length">
    <v-card v-for="item in items" class="mb-2">
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-subtitle class="text-left">
        <a :href="item.link" target="_blank">{{ item.link }}</a>
      </v-card-subtitle>
      <v-card-text class="mt-n4 text-left">
        {{ new Date(item.createdAt).toISOString() }}
      </v-card-text>
    </v-card>
  </div>
  <div v-else>
    No articles
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted() {
      this.$axios
        .$get('http://localhost:8080/api/v1/articles')
        .then((response) => { this.items = response })
        .catch((error) => console.error(error));
    }
  }
</script>
