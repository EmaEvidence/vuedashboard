<template>
  <v-app id="inspire">
    <v-navigation-drawer stateless hide-overlay :mini-variant.sync="mini" v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="medium-icons">widgets</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Widgets</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          draggable="true"
          v-on:dragstart="onDragWidget(item.title)"
          v-bind:class="{ active: getWidgetState(item.title)}"
          :key="item.title" class="widget-list" v-on:click="toggleWidget(item.title)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <div v-if="getWidgetState(item.title)" class="active"></div>          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'widget1', icon: 'dashboard' },
        { title: 'widget2', icon: 'question_answer' },
        { title: 'widget3', icon: 'dashboard' },
        { title: 'widget4', icon: 'question_answer' },
        { title: 'widget5', icon: 'dashboard' },
        { title: 'widget6', icon: 'question_answer' },
        { title: 'widget7', icon: 'dashboard' },
        { title: 'widget8', icon: 'question_answer' },
        { title: 'widget9', icon: 'question_answer' },
        { title: 'widget10', icon: 'question_answer' },
        { title: 'widget11', icon: 'question_answer' },
        { title: 'widget12', icon: 'question_answer' },
      ],
      mini: true,
      right: null,
    };
  },
  methods: {
    toggleWidget(name) {
      this.$store.dispatch('toggleWidget', name);
    },
    onDragWidget(name) {
      this.$store.dispatch('setActiveWidget', name);
      event.stopPropagation();
    },
    getWidgetState(name) {
      const widgetState = this.$store.getters.getUserWidgets;
      return widgetState[name];
    },
  },
  computed: {
  }
};
</script>

<style scoped>
.medium-icons {
  font-size: 3rem;
  cursor: pointer;
}
.widget-list {
  cursor: pointer;
  opacity: 0.5;
}
.widget-list:hover {
  background: #cccccc;
  color: #ffffff;
}
.active {
  opacity: 1;
}
</style>
