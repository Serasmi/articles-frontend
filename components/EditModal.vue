<template>
  <div class="text-center">
    <v-dialog v-model="isShow" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Edit article
        </v-card-title>

        <v-card-text> Article content: {{ selected }} </v-card-text>

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
    hide() {
      this.$store.commit('selectArticle', {});
    }
  }
};
</script>
