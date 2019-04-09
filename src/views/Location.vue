<template>
  <div class="location">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>location page</h1>
          <div class="d-flex flex-wrap">
            <b-button>Default</b-button><br />
            <b-button variant="danger">Danger</b-button><br />
            <b-button variant="primary">Primary</b-button><br />
            <!-- <b-button variant="warning">Warning</b-button><br /> -->
            <b-button variant="success">Succes</b-button><br />
            <b-button variant="outline-primary">Outline-primary</b-button><br />
            <b-button variant="light">light</b-button><br />
            <b-button variant="outline-success">Outline Succes</b-button><br />
            <b-button variant="outline-danger">Outline Danger</b-button><br />

            <b-button variant="primary" size="sm">Primary</b-button><br />
            <b-button variant="success" size="lg">Succes</b-button><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
