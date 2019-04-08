<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/tickets">Tickets</router-link>
      <router-link to="/sponsors">Sponsors</router-link>
      <router-link to="/location">Location</router-link>
    </nav>
    <router-view />

    <footer>
      <nav id="footer-nav">
        <router-link to="/terms">Impressum</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
