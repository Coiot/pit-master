<template>
  <main>
    <div class="full-height single xs-border-left xs-border-right">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <h1 class="xs-py3 main-title">Something</h1>
          <p>Else</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  watchQuery: ["page"],
  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: {},
  data() {
    return {};
  },
  methods: {},

  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
section {
  width: 100%;
  grid-column: span 12;
  max-width: 1200px;
  margin: 0 auto;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
