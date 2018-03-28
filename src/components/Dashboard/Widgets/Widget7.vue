<template>
  <v-flex d-flex xs12 sm6 md3 draggable="true" class="widget">
    <v-layout row wrap>
      <v-flex d-flex>
        <v-card color="grey lighten-1" dark>
          <v-card-text
          v-text="lorem.slice(0, 70)">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex>
        <v-layout row wrap>
          <v-flex
            d-flex
            v-for="n in 2"
            :key="n"
            xs12
          >
            <v-card
              color="grey lighten-1"
              dark
            >
              <v-card-text
              v-text="lorem.slice(0, 40)">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import WidgetAction from '../WidgetActions';

export default {
  components: {
    WidgetAction,
  },
  name: 'Widget7',
  data: () => ({
    lorem: 'A widget is a simple application extension that is often part of a larger application already installed on the device. Widgets come in all shapes and sizes, are customizable, and reside on any available Home screen for quick access.',
  }),
};
</script>
