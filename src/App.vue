<template>
  <div id="app">
    <vc-navbar></vc-navbar>
    <router-view />

    <vc-footer></vc-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    "vc-navbar": Navbar,
    "vc-footer": Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.9;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
}
</style>
