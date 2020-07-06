<template>
  <main class="clearfix">
    <div class="full-height single xs-border-left xs-border-right">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <section class="col xs-col-12 xs-py2 xs-px2 md-px4">
            <div class="col xs-col-12 md-col-6">
              <h1 class="xs-py3 main-title">Call-to-Action</h1>
              <p>Text here.</p>
            </div>
            <div class="col xs-col-12 md-col-6">
              <transition appear name="fade">
                <img
                  src="https://generative-placeholders.glitch.me/image?width=500&height=500&colors=61&img=01"
                />
              </transition>
            </div>
          </section>
          <section class="col xs-col-12 xs-p2 xs-px2 xs-my3 md-px3 card">
            <h3 class="secondary-title">Covid-19 Assurance</h3>
            <p>Text here.</p>
          </section>
          <section class="col xs-col-12 xs-py2 xs-px2 xs-my3 md-px4">
            <h2 class="xs-py2 main-title">Barbecue Plates — Our Homage to Texas</h2>
            <div class="col xs-col-12 md-col-8">
              <h3 class="xs-py3 main-title">Plate</h3>
              <p>Text here.</p>
              <button class="button xs-px3 xs-py2">+ Price</button>
            </div>
            <div class="col xs-col-12 md-col-4">
              <transition appear name="fade">
                <img
                  src="https://generative-placeholders.glitch.me/image?width=500&height=500&colors=61&img=01"
                />
              </transition>
            </div>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Just Meats</h2>
            <article>
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">Text</h3>
                <button class="button xs-px3 xs-py1">+ Price</button>
              </div>
              <p>Here</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Our Sides</h2>
            <article>
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">Text</h3>
                <button class="button xs-px3 xs-py1">+ Price</button>
              </div>
              <p>Here</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Extras</h2>
            <article>
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">Text</h3>
                <button class="button xs-px3 xs-py1">+ Price</button>
              </div>
              <p>Here</p>
            </article>
          </section>
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
.leaders {
  overflow-x: hidden;
}
.leaders:after {
  content: "     -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -  ";
  white-space: pre;
}
.button {
  background-color: black !important;
  font-size: 1.1rem !important;
  font-family: "Archivo Black", sans-serif !important;
  font-weight: 300 !important;
  line-height: 1.1 !important;
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
