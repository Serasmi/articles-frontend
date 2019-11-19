import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      articles: [],
      selected: {}
    },
    mutations: {
      setArticles(state, payload) {
        state.articles = payload;
      }
    },
    actions: {
      async getArticles() {
        const data = await this.$axios.$get(
          'http://localhost:8080/api/v1/articles'
        );
        this.commit('setArticles', data);
      }
    }
  });

export default store;
