<template>
  <div id="app">
    <vc-navbar></vc-navbar>
    <router-view />

    <footer>
      <nav id="footer-nav">
        <router-link to="/terms">Impressum</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    "vc-navbar": Navbar
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
#nav,
#footer-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-right: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
