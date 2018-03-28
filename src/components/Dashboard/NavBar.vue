<template>
  <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Ema Evidence</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Home</v-btn>
        <v-btn flat class="active">Dashboard</v-btn>
        <v-btn flat>LogOut</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu bottom left>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="small-screen-nav">
              <v-btn flat>Home</v-btn>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title class="small-screen-nav">
              <v-btn flat class="active">Dashboard</v-btn>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title class="small-screen-nav">
              <v-btn flat>LogOut</v-btn>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      msg: 'Welcome',
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  border-bottom: 3px solid grey;
}
.small-screen-nav {
  height: auto;
}
</style>
