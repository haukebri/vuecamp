<template>
  <div class="home">
    <header-teaser class="container" />
    <div class="bg-grey py-5 relative" id="barcamp">
      <div class="container">
        <div class="men"><img src="../assets/men.png" alt="" /></div>
        <div class="row">
          <div class="col-md-5">
            <h2>What is a barcamp</h2>
            <p>
              You got the basic idea: A barcamp is community driven and everyone
              can step up with a topic. But how does it work exactly? Let’s
              break the event down into smaller chunks.
              <br /><br />
              First, you introduce yourself to everyone else using only three
              words. The goal here is not to recognize a hundred people, but to
              get a general idea of what knowledgebase and topics we have.
              <br /><br />
              After that everyone is encouraged to propose a topic to fill
              today's session plan.
              <br /><br />
              These sessions are then scheduled and divided into the available
              rooms.
              <br /><br />
              That’s it. The fun begins. 🎉 You are free to attend any session
              and share your knowledge, meet people and engage others.
            </p>
          </div>
          <div class="col-md-5 offset-md-2">
            <h2>Attending</h2>
            <p>
              Become a vuecamp advocate by telling others!
              <a href="https://twitter.com/search?q=%23vuecamp">#vuecamp</a>
            </p>

            <p>
              Just to get everything covered, we invided some people from
              different communities like Nuxt, vue-storefront or codesandbox.
            </p>
            <a
              href="https://twitter.com/intent/tweet?button_hashtag=vuecamp&ref_src=twsrc%5Etfw"
              class="twitter-hashtag-button"
              data-size="large"
              data-show-count="false"
              >Tweet #vuecamp</a
            >
            <a
              class="twitter-timeline"
              href="https://twitter.com/VueCamp_de?ref_src=twsrc%5Etfw"
              >Tweets by VueCamp_de</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 container centered" id="sponsors">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2>Sponsors</h2>
          <p>
            Barcamps are organized by the community and wouldn’t be possible
            without sponsors. In this respect, the vuecamp also needs your
            support and we very much appreciate your commitment.
          </p>
          <p>
            To become a sponsor, please contact Hauke Brinkmann
            (h.brinkmann@reply.de). <br />Possible sponsorings: <br />
            <b>Bronze</b>: 100<br />
            <b>Silver</b>: 500<br />
            <b>Gold</b>: 1000
          </p>
          <h3 class="mt-5">Our Sponsors</h3>

          <p>
            <img
              class="sponsor sponsor-gold"
              src="../assets/sponsors/pttlogo.png"
              alt="Portaltech Reply GmbH"
            />
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey py-5 relative" id="tickets">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2>
              Tickets
            </h2>
            <p>
              We will start the ticket sale very soon.
            </p>
            <p>
              If you want to stay up to date you can follow our twitter account
              <a target="_blank" href="https://twitter.com/VueCamp_de"
                >@VueCamp_de</a
              >.
            </p>
          </div>
          <div class="col-md-5 offset-md-2">
            <h2>Location</h2>
            <p>
              The barcamp will take place in the GLS Campus berlin.
            </p>
            <p>
              <b>GLS CAMPUS BERLIN</b><br />
              Kastanienallee 82 <br />
              10435 Berlin Prenzlauer Berg<br />
            </p>
            <a href="https://gls-campus-berlin.de/" target="_blank"
              >gls-campus-berlin.de</a
            ><br />
            <a href="https://goo.gl/maps/wJ4FdPcgcax" target="_blank"
              >Link to maps<br />
              <img src="../assets/berlin.png" alt="Map of Berlin"
            /></a>

            <h4 class="mt-4">Parking</h4>
            <p>
              GLS cannot provide enough parking space for all participants. You
              can park either on the GLS campus (15€ per day) or at the Hotel
              Oderberger (25€ per day). Both parking spaces require prior
              registration with the provider. We recommend travelling by public
              transport.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTeaser from "@/components/HeaderTeaser";

export default {
  name: "home",
  components: {
    HeaderTeaser
  }
};
</script>

<style lang="scss">
.bg-grey {
  background: #eff9f4;
}
.py-2 {
  padding-top: 50px;
  padding-bottom: 50px;
}
.relative {
  position: relative;
}

.men {
  position: absolute;
  bottom: 99%;
  max-width: 220px;
}
img {
  max-width: 100%;
}
.centered {
  text-align: center;
}

.sponsor {
  max-width: 150px;
}
</style>
