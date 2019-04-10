<template>
  <div class="header-teaser">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <logo />
      </div>
    </div>
    <div class="row mt-big">
      <div class="col-md-8 offset-md-2">
        <h1>
          Vue.JS Barcamp Berlin
        </h1>
        <p>
          <b
            >Experience two thrilling days of learning, community and
            contribution.</b
          >
          A barcamp is not just another passive listening conference. Instead,
          you and everyone else is asked to share their ideas, lead a workshop
          or give a talk. The vuecamp is structured like a barcamp. Well, what’s
          a barcamp you ask? We’ll dive into that 👉<a href="#barcamp">here</a>.
        </p>

        <p>
          I am hooked, let's get together on <b>05. and 06.10.2019!</b><br />
        </p>
        <b-button variant="outline-success" size="lg">Get a ticket</b-button>
      </div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "headerteaser",
  components: {
    Logo
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.header-teaser {
  padding: 200px 0;
  text-align: center;

  h1 {
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
  }
}
.mt-big {
  margin-top: 100px;
}

@media (max-height: 1000px) {
  .header-teaser {
    padding: 80px 0;
  }
  .mt-big {
    margin-top: 60px;
  }
}

@media (max-height: 800px) {
  .header-teaser {
    padding: 40px 0;
  }
  .mt-big {
    margin-top: 60px;
  }
}
</style>
