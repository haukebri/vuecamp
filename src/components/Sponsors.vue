<template>
  <div class="sponsors">
    <h3 class="mt-5">Main Sponsor</h3>
    <div class="gold-sponsors row">
      <div class="col-md-6 offset-md-3 centered">
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
      <div class="col-md-5 centered">
        <a href="https://www.car2go.com/DE/en/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/car2go_logo.png"
            alt="Car2Go"
          />
        </a>
      </div>

      <div class="col-md-5 offset-md-2 centered">
        <a href="https://portaltech.reply.com/portaltech/en/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/yourlogo.png"
            alt="Portaltech Reply GmbH"
          />
        </a>
      </div>
    </div>

    <h3 class="mt-5">Silver Sponsors</h3>
    <div class="silver-sponsors">
      <a href="https://portaltech.reply.com/portaltech/en/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/yourlogo.png"
          alt="Portaltech Reply GmbH"
        />
      </a>
    </div>

    <h3 class="mt-5">Bronze Sponsors</h3>
    <div class="bronze-sponsors">
      <a href="https://portaltech.reply.com/portaltech/en/" target="_blank">
        <img
          class="sponsor sponsor-gold"
          src="../assets/sponsors/yourlogo.png"
          alt="Portaltech Reply GmbH"
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

.silver-sponsors {
  a {
    max-width: 250px;
    padding: 20px;
  }
}

.bronze-sponsors {
  a {
    max-width: 200px;
    padding: 20px;
  }
  img {
    filter: grayscale(1);
  }
}

.sponsors .centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
