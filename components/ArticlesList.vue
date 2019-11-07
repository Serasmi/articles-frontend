<template>
  <div>
    <v-card v-for="item in items" class="mb-2">
      <v-card-title>{{ item.title }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'Item #1',
          'Item #2',
          'Item #3',
        ]
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
