import mutations from '../mutations';

const { CHANGE_VISIBLE } = mutations;

const overlayStore = {
  namespaced: true,
  state: {
    visible: false,
  },
  getters: {
    visibleState: ({ visible }) => visible,
  },
  mutations: {
    [CHANGE_VISIBLE](state, value) {
      state.visible = value;
    },
  },
  actions: {
    changeVisible({ commit }, value) {
      commit('CHANGE_VISIBLE', value);
    },
  },
};

export default overlayStore;
