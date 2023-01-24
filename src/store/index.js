import { createStore } from 'vuex'

export default createStore({
  state: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    gender: 'male',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  getters: {
  },
  mutations: {
    // mutations accept state as the first argument, and payload as second
    SET_USER(state, results) {
      state.firstName = results[0].name.first
      state.lastName = results[0].name.last
      state.email = results[0].email
      state.gender = results[0].gender
      state.picture = results[0].picture.large
    }
  },
  actions: {
    // mutations must be synchronous, but actions can be async
    async fetchUser({ commit }) {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      /*
      each mutation has a string type and a handler.
      You can't call a mutation directly, like SET_USER().

      Here we're doing commit instead of context.commit because
      we pulled commit out of the first argument of this fetchUser
      action, which is store. 

      Action handlers receive a context object which exposes 
      the same set of methods/properties on the store instance, 
      so you can call context.commit to commit a mutation, or 
      access the state and getters via context.state and context.getters.
      */
      
      commit('SET_USER', results);
    }
  },
  modules: {
  }
})
