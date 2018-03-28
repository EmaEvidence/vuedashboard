<template>
  <div class="">
    <div class="navbar">
      <Nav-Bar />
    </div>
    <div class="body-wrapper">
      <div class="aside">
        <Side-Nav />
      </div>
      <div class="mainbody">
        <WidgetHolder />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SideNav from './Dashboard/SideNav';
import NavBar from './Dashboard/NavBar';
import Footer from './Dashboard/Footer';
import WidgetHolder from './Dashboard/WidgetHolder';

export default {
  components: {
    'Side-Nav': SideNav,
    'Nav-Bar': NavBar,
    Footer,
    WidgetHolder,
  },
  name: 'Dashboard',
  data() {
    return {
      msg: 'Proposed Dashboard',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.body-wrapper {
  display: flex;
}
.navbar {
}
</style>
