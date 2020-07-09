<template>
  <main class="clearfix">
    <div class="full-height single xs-border-left xs-border-right">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <section class="col xs-col-12 xs-py2 xs-px2 md-px4">
            <div class="col xs-col-12 md-col-6">
              <h1 class="xs-py3 main-title">{{ cta.title }}</h1>
              <p>{{ cta.body }}</p>
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
            <h3 class="secondary-title">{{ notice.title }}</h3>
            <p>{{ notice.body }}</p>
          </section>
          <section class="col xs-col-12 xs-py2 xs-px2 xs-my4 md-px4">
            <h2 class="xs-py2 main-title">Barbecue Plates — Our Homage to Texas</h2>
            <article v-for="plate in menu.plates" :key="plate.item" class="plate xs-flex xs-my4">
              <div class="col xs-col-12 md-col-8">
                <h3 class="xs-pt1 main-title">{{ plate.item }}</h3>
                <p class="xs-pb1 secondary-title">{{ plate.includes }}</p>
                <p class="xs-my2">{{ plate.description }}</p>
                <button class="button xs-px3 xs-py2 xs-my2">{{ plate.price }}</button>
              </div>
              <div class="col xs-col-12 md-col-4">
                <transition appear name="fade">
                  <img :src="plate.image" />
                </transition>
              </div>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Just Meats</h2>
            <article v-for="meat in menu.meats" :key="meat.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ meat.item }}</h3>
                <button class="button xs-px3 xs-py1">{{ meat.price }}</button>
              </div>
              <p>{{ meat.description }}</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Our Sides</h2>
            <article v-for="side in menu.sides" :key="side.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ side.item }}</h3>
                <button class="button xs-px3 xs-py1">{{ side.price }}</button>
              </div>
              <p>{{ side.description }}</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Extras</h2>
            <article v-for="extra in menu.extras" :key="extra.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ extra.item }}</h3>
                <button class="button xs-px3 xs-py1">{{ extra.price }}</button>
              </div>
              <p>{{ extra.description }}</p>
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
  data() {
    return {};
  },
  methods: {},
  computed: {
    cta() {
      return this.$store.state.cta;
    },
    notice() {
      return this.$store.state.notice;
    },
    menu() {
      return this.$store.state.menu;
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
.button {
  background-color: black !important;
  font-size: 1.1rem !important;
  font-family: "Archivo Black", sans-serif !important;
  font-weight: 300 !important;
  line-height: 1.1 !important;
}
.plate:nth-of-type(even) {
  flex-flow: row-reverse;
  justify-content: flex-end;
}
.plate:nth-of-type(even) div {
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  justify-content: flex-end;
  text-align: end;
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
