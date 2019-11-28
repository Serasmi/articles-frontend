import Vue from 'vue';
import Vuex from 'vuex';

import { sortByDate } from './utils';

import Config from '../config';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      articles: [],
      link: '',
      selected: {}
    },
    mutations: {
      changeLink(state, newLink) {
        state.link = newLink;
      },
      setArticles(state, payload) {
        state.articles = payload.sort(sortByDate);
      }
    },
    actions: {
      async getArticles() {
        const data = await this.$axios.$get(
          `${Config.apiUrl}/articles`
        );
        this.commit('setArticles', data);
      },
      async addArticle({ state }) {
        await this.$axios.$post(
          `${Config.apiUrl}/articles`,
          { link: state.link }
        );
        this.dispatch('getArticles');
      }
    }
  });

export default store;
