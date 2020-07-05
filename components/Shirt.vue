<template>
  <section class="clearfix">
    <div class="col xs-col-12 md-col-6">
      <img src="https://generative-placeholders.glitch.me/image?width=500&height=300&colors=61" />
    </div>
    <div class="col xs-col-12 md-col-6 xs-p4 xs-flex-grow-1">
      <h3 class="xs-py3 main-title">{{ shirt.title }}</h3>
      <p>{{ shirt.body }}</p>
      <button class="button xs-my3">{{ shirt.button }}</button>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      shirt: {
        title: "JM BBQ Shirt",
        body: "Support your local pit master.",
        button: "Order now to rep the Q"
      }
    };
  }
};
</script>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>