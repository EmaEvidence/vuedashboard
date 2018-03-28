<template>
   <v-container fluid grid-list-md v-on:dragover="setWidget">
    <v-layout row wrap class="widget-holder" id="sortable">
      <Widget1 v-if="widgets.widget1" />
      <Widget2 v-if="widgets.widget2" />
      <Widget3 v-if="widgets.widget3" />
      <Widget4 v-if="widgets.widget4" />
      <Widget5 v-if="widgets.widget5" />
      <Widget6 v-if="widgets.widget6" />
      <Widget7 v-if="widgets.widget7" />
      <Widget8 v-if="widgets.widget8" />
      <Widget9 v-if="widgets.widget9" />
      <Widget10 v-if="widgets.widget10" />
      <Widget11 v-if="widgets.widget11" />
      <Widget12 v-if="widgets.widget12" />
    </v-layout>
  </v-container>
</template>

<script>
import Widget1 from './Widgets/Widget1';
import Widget2 from './Widgets/Widget2';
import Widget3 from './Widgets/Widget3';
import Widget4 from './Widgets/Widget4';
import Widget5 from './Widgets/Widget5';
import Widget6 from './Widgets/Widget6';
import Widget7 from './Widgets/Widget7';
import Widget8 from './Widgets/Widget8';
import Widget9 from './Widgets/Widget9';
import Widget10 from './Widgets/Widget10';
import Widget11 from './Widgets/Widget11';
import Widget12 from './Widgets/Widget12';

export default {
  components: {
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5,
    Widget6,
    Widget7,
    Widget8,
    Widget9,
    Widget10,
    Widget11,
    Widget12,
  },
  name: 'WidgetHolder',
  data() {
    return {
      widgets: this.$store.getters.getUserWidgets,
      lorem: 'A widget is a simple application extension that is often part of a larger application already installed on the device. Widgets come in all shapes and sizes, are customizable, and reside on any available Home screen for quick access.',
    };
  },
  methods: {
    setWidget() {
      this.$store.dispatch('dropWidget');
      event.stopPropagation();
    },
  },
  computed: {
  },
};
</script>

<style scoped>
  .widget-holder {
    overflow: auto;
    height: 93vh;
  }
  .icon {
    cursor: pointer;
    opacity: 0.6;
  }
  .icon:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>
