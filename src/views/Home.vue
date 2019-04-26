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
            without sponsors. In this respect, the vuecamp needs your support
            and we very much appreciate your commitment.
          </p>
          <p>
            Detailed information about sponsoring can be found
            <a href="/sponsoring_vuecamp_berlin_2019.pdf" target="_blank"
              >here</a
            >. <br /><br />
            Please contact us if you have any further questions:
            <a href="mailto:m.klawonn@reply.de">m.klawonn@reply.de</a> or
            <a href="mailto:h.brinkmann@reply.de">h.brinkmann@reply.de</a>.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <sponsors />
        </div>
      </div>
    </div>

    <div class="bg-grey py-5 relative" id="team">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2>Orga team</h2>
            <p>
              The vuecamp was created by
              <a
                href="https://portaltech.reply.com/portaltech/en/"
                target="_blank"
              >
                portaltech reply</a
              >, but is based on the help and thoughts of many individuals.
              Thank you very much for that.
            </p>
            <a
              href="https://portaltech.reply.com/portaltech/en/"
              target="_blank"
            >
              <img
                class="orgaimg"
                src="../assets/sponsors/pttlogo.png"
                alt=""
              />
            </a>
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

    <div class="py-5 container centered" id="tickets">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2>Tickets</h2>
          <iframe
            src="https://UMOOZEV-modules.xing-events.com/UMOOZEV.html?viewType=iframe&distributionChannel=CHANNEL_IFRAME&language=de&useDefaults=false&resizeIFrame=true"
            frameborder="0"
            width="650px"
            id="_amiandoIFrame3670008"
            ><p>
              Diese Seite benötigt die Unterstützung von Frames durch Ihren
              Browser. Bitte nutzen Sie einen Browser, der die Darstellung von
              Frames unterstützt, damit das Ticketvorverkaufs-Modul angezeigt
              werden kann.
            </p>
            <p>
              Probieren Sie die XING Events
              <a href="https://www.xing-events.com">online Registrierung</a>
              noch heute aus.
            </p></iframe
          >Mehr Teilnehmer mit
          <a
            href="https://www.xing-events.com?viralRefId=UMOOZEV&utm_campaign=ev-UMOOZEV&utm_medium=viral&utm_source=EventWebsite&utm_content=TextLinkBottom&utm_term=text-link"
            target="_blank"
            alt="XING Events"
            title="XING Events"
            >Online Event Management-Lösungen</a
          >
          von XING Events.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTeaser from "@/components/HeaderTeaser";
import Sponsors from "@/components/Sponsors";

export default {
  name: "home",
  components: {
    HeaderTeaser,
    Sponsors
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
.orgaimg {
  max-width: 250px;
}
</style>
