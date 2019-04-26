<template>
  <div class="sponsors">
    <h3 class="mt-5">Gold Sponsors</h3>
    <div class="gold-sponsors row">
      <div class="col-md-5 entered">
        <a href="https://portaltech.reply.com/portaltech/en/" target="_blank">
          <img
            class="sponsor sponsor-gold"
            src="../assets/sponsors/yourlogo.png"
            alt="Portaltech Reply GmbH"
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
