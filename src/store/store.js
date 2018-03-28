import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userWidgets: {
      widget1: true,
      widget2: true,
      widget3: true,
      widget4: true,
      widget5: true,
      widget6: true,
      widget7: true,
      widget8: true,
      widget9: true,
      widget10: true,
      widget11: true,
      widget12: true,
    },
    activeWidget: '',
  },
  getters: {
    getUserWidgets: state => state.userWidgets,
  },
  mutations: {
    toggleWidget: (state, name) => {
      const newState = state.userWidgets;
      newState[name] = !newState[name];
      return newState;
    },
    setActiveWidget: (state, name) => {
      state.activeWidget = name;
      return state;
    },
    dropWidget: (state) => {
      const widget = state.activeWidget;
      const newState = state.userWidgets;
      newState[widget] = true;
      return newState;
    },
  },
  actions: {
    toggleWidget: (context, name) => {
      context.commit('toggleWidget', name);
    },
    setActiveWidget: (context, name) => {
      context.commit('setActiveWidget', name);
    },
    dropWidget: (context) => {
      context.commit('dropWidget');
    },
  },
});

export default store;
