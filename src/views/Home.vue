<template>
  <div class="home">
    <header-teaser class="container" />
    <div class="bg-grey py-5 relative">
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
              Become a vuecamp advocate by telling others! #vuecamp
            </p>
            <p>--- twitter hier?!!---</p>
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
  img {
    max-width: 100%;
  }
}
</style>
