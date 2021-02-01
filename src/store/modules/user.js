import CryptoJS from 'crypto-js';

const state = {
  firstName: 'JM',
  lastName: 'Macapagal',
  email: 'jm.macapagal23@gmail.com',
  password: '',
  gravatar: '',
};

const getters = {
  fullName: (state) => `${state.firstName} ${state.lastName}`,
  firstName: (state) => state.firstName,
  lastName: (state) => state.lastName,
  gravatar: (state) => state.gravatar,
  email: (state) => state.email,
};

const actions = {
  fetchGravatar({ commit }) {
    let imgSrc = CryptoJS.MD5(state.email).toString();
    let gravatar = `https://www.gravatar.com/avatar/${imgSrc}`;

    commit('setGravatar', gravatar);
  },

  updateFullname({ commit }, payload) {
    commit('setFirstName', payload.firstName);
    commit('setLastName', payload.lastName);
  },

  updatePassword({ commit }, payload) {
    commit('setPassword', payload);
  },

  updateEmail({ commit }, payload) {
    commit('setEmail', payload);
  },
};

const mutations = {
  setGravatar: (state, gravatar) => (state.gravatar = gravatar),
  setFirstName: (state, firstName) => (state.firstName = firstName),
  setLastName: (state, lastName) => (state.lastName = lastName),
  setPassword: (state, password) => (state.password = password),
  setEmail: (state, email) => (state.email = email),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
