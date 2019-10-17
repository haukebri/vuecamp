<template>
  <div class="sponsors">
    <h3 class="mt-5">Main Sponsor</h3>
    <div class="gold-sponsors main-sponsor row">
      <div class="col-md-8 centered">
        <a href="https://www.shopware.com/en/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/shopware_logo_blue.png"
            alt="Shopware AG"
          />
        </a>
      </div>
    </div>

    <h3 class="mt-5">Gold Sponsors</h3>
    <div class="gold-sponsors row">
      <div class="col-md-5">
        <a href="https://www.share-now.com/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/sharenow_logo.png"
            alt="Car2Go"
          />
        </a>
      </div>
    </div>

    <h3 class="mt-5">Silver Sponsors</h3>
    <div class=" row silver-sponsors">
      <div class="col-md-3 centered">
        <a href="https://www.factorial.io/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/logo_factorial.png"
            alt="Factorial GmbH"
          />
        </a>
      </div>
    </div>

    <h3 class="mt-5">Bronze Sponsors</h3>
    <div class="bronze-sponsors">
      <a href="https://webvisum.de/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/webvisum.png"
          alt="Webvisum"
        />
      </a>
      <a href="https://storyblok.com/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/storyblok.png"
          alt="storyblok"
        />
      </a>
      <a href="https://sylius.com/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/sylius.png"
          alt="sylius"
        />
      </a>
      <a href="https://signundsinn.de/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/signundsinn.png"
          alt="signundsinn"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "sponsors",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.sponsors {
  a,
  img {
    display: inline-block;
    max-height: 120px;
  }
}

.right {
  text-align: right;
}
.main-sponsor img,
.main-sponsor a {
  max-height: 200px;
  padding-top: 0 !important;
}
.gold-sponsors,
.silver-sponsors {
  justify-content: center;
  a {
    padding: 20px;
  }
}

.bronze-sponsors {
  a {
    max-width: 200px;
    padding: 20px;
  }
  img {
    // filter: grayscale(1);
    max-height: 45px;
  }
}

.sponsors .centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
