<template>
  <div class="text-center">
    <v-dialog v-model="isShow" width="500">
      <v-card>
        <v-card-title class="title blue darken-2 white--text">
          Edit article
        </v-card-title>

        <v-card-text class="article-data">
          <v-row class="description justify-space-between mb-2 mt-1">
            <div>#{{ selected.id }}</div>
            <div>{{ formatUnixDate(selected.createdAt) }}</div>
          </v-row>

          <v-row>
            <div class="title grey--text text--darken-3 mb-2">
              {{ selected.title }}
            </div>
          </v-row>

          <v-row>
            <div>
              <a :href="selected.link" target="_blank">{{ selected.link }}</a>
            </div>
          </v-row>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="hide()">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { isObjectEmpty } from '~/utils';
import { formatUnixDate } from '../utils';

export default {
  computed: {
    isShow() {
      return isObjectEmpty(this.$store.state.selected);
    },
    selected() {
      return this.$store.state.selected;
    }
  },
  data() {
    return {};
  },
  methods: {
    formatUnixDate: date => formatUnixDate(date),
    hide() {
      this.$store.commit('selectArticle', {});
    }
  }
};
</script>
