<template>
  <span>
    <v-icon class="icon">drag_handle</v-icon>
    <v-icon class="icon">edit</v-icon>
    <v-icon class="icon" v-on:click="closeWidget">close</v-icon>
  </span>
</template>

<script>
export default {
  props: ['name'],
  widgetName: '',
  data() {
    return {
      widgetName: this.name,
      lorem: 'A widget is a simple application extension that is often part of a larger application already installed on the device. Widgets come in all shapes and sizes, are customizable, and reside on any available Home screen for quick access.',
    };
  },
  methods: {
    closeWidget() {
      this.$store.dispatch('toggleWidget', this.widgetName);
    },
  },
};
</script>

<style scoped>
  .icon {
    cursor: pointer;
    opacity: 0.6;
  }
  .icon:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>
