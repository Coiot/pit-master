<template>
  <section class="clearfix">
    <div class="col xs-col-12 md-col-6 xs-my4">
      <img src="https://pit-master.netlify.app/images/uploads/t-shirt.jpg" />
    </div>
    <div class="col xs-col-12 md-col-6 xs-px6 xs-py2 xs-flex-grow-1">
      <h3 class="xs-py3 main-title">{{ shirt.title }}</h3>
      <p>{{ shirt.body }}</p>
      <!-- <button class="button xs-my3">{{ shirt.button }}</button> -->
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    shirt() {
      return this.$store.state.shirt;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>