<template>
  <div class="navbar-wrap">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <b-navbar toggleable="lg">
            <b-navbar-brand href="#"
              ><router-link to="/"
                ><span>Vue</span>camp 2019</router-link
              ></b-navbar-brand
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="justify-content-end">
              <b-navbar-nav>
                <b-nav-item href="#"
                  ><router-link to="/">Home</router-link></b-nav-item
                >
                <b-nav-item href="#"
                  ><router-link to="/tickets">Tickets</router-link></b-nav-item
                >
                <b-nav-item href="#"
                  ><router-link to="/sponsors"
                    >Sponsors</router-link
                  ></b-nav-item
                >
                <b-nav-item href="#"
                  ><router-link to="/location"
                    >Location</router-link
                  ></b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vc-navbar",

  data: function() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../assets/custom.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.navbar-wrap {
  background-color: $white;
  a {
    font-weight: bold;
    color: $body-color;
    padding-right: 10px;
    text-decoration: none;
  }
}
.navbar-collapse {
  a {
    transition: color 0.25s ease-in-out;
    &.router-link-exact-active {
      color: $green;
    }
    &:hover {
      color: $green;
    }
  }
}

.navbar-brand {
  text-transform: uppercase;
  span {
    color: $green;
  }
}
</style>
