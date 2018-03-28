<template>
  <v-footer class="" fixed>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
