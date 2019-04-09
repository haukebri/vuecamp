<template>
  <div class="footer-wrap mt-5 relative">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <footer>
            <nav id="footer-nav" class="d-flex justify-content-center">
              <router-link to="/terms">Impressum</router-link>
              <router-link to="/privacy">Privacy</router-link>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vc-footer"
};
</script>

<style scoped lang="scss">
@import "../assets/custom.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

footer {
  display: block;
}
.footer-wrap {
  border-top: 1px $green solid;
}

#footer-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $body-color;
    padding-right: 10px;
    transition: color 0.25s ease-in-out;
    text-decoration: none;
    &.router-link-exact-active {
      color: $green;
    }
    &:hover {
      color: $green;
    }
    &:not(:last-child):after {
      content: "\2022";
      padding-left: 10px;
      color: $green;
    }
  }
}
</style>
