import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    authenticated: false
  },
  mutations: {
    updateUser (state, payload) {
      state.user = payload
    },
    updateAuthenticated (state, payload) {
      state.authenticated = payload
    }
  },
  actions: {
    getCurrentUser(context) {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        context.commit('updateAuthenticated', true)
        context.commit('updateUser', responseJson.user)
      })
      .catch(error => {
        context.commit('updateAuthenticated', false)
      });
    }
  }
})