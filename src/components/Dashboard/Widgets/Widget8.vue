<template>
  <v-flex d-flex xs12 sm6 md2 child-flex draggable="true" class="widget">
    <v-card color="grey lighten-1" dark>
      <v-card-text
      v-text="lorem.slice(0, 90)">
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import WidgetAction from '../WidgetActions';

export default {
  components: {
    WidgetAction,
  },
  name: 'Widget8',
  data: () => ({
    lorem: 'A widget is a simple application extension that is often part of a larger application already installed on the device. Widgets come in all shapes and sizes, are customizable, and reside on any available Home screen for quick access.',
  }),
};
</script>
