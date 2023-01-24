<template>
  <img
    :src="picture"
    :alt="`${firstName} ${lastName}`"
    :class="gender"
  />
  <h1>{{firstName}} {{lastName}}</h1>
  <h3>Email: {{email}}</h3>
  <button :class="gender" @click="fetchUser()">Get Random User</button>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
 /*
  when storing state in VueX, you bring it into
  your component via computed instead of data
 */
  computed: mapState([
    'firstName',
    'lastName',
    'email',
    'gender',
    'picture',
  ]),
  /*
  mapActions, mapState, etc. return an object. If you want other
  methods that aren't part of VueX, you do the 
  object spread operator ...mapActions to copy properties from 
  that object onto this one
  */

 /*
  mapping actions means we don't have to call
  store.dispatch('fetchUser')
 */
  methods: mapActions([
    'fetchUser'
  ])
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  width: 400px;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}

</style>
