<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>VueFire TODO</h2>
      </div> 
    </v-app-bar>

    <v-main>
      <ToDoList />
    </v-main>
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: "App",

  components: {
    ToDoList
  },

  data: () => ({
    //
  }),
};
</script>
