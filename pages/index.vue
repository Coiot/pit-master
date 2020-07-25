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
                <img />
              </transition>
            </div>
          </section>
          <section class="col xs-col-12 xs-p2 xs-px2 xs-my3 md-px3 card">
            <h3 class="secondary-title">{{ notice.title }}</h3>
            <p>{{ notice.body }}</p>
          </section>
          <section class="col xs-col-12 xs-py2 xs-px2 xs-my4 md-px4">
            <h2 class="xs-py2 main-title">Barbecue Plates — Our Homage to Texas</h2>
            <article
              v-for="plate in menu.plates"
              :key="plate.item"
              class="plate xs-flex xs-flex-column-reverse md-flex-row xs-my6 md-my4 xs-py1 md-py2"
            >
              <div class="col xs-col-12 md-col-8 xs-px0 md-px2">
                <h3 class="xs-pt1 main-title">{{ plate.item }}</h3>
                <p class="xs-pb1 secondary-title">{{ plate.includes }}</p>
                <p class="xs-my2">{{ plate.description }}</p>
                <input
                  type="number"
                  v-model="plate.quantity"
                  id="quantity"
                  min="0"
                  max="20"
                  pattern="[0-9]*"
                  oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                />
                <button
                  class="button xs-px3 xs-py2 xs-my1"
                  @click="cartAdd(plate.item, plate.quantity, plate.price)"
                >${{ plate.price }}</button>
              </div>
              <div class="col xs-col-12 md-col-4">
                <transition appear name="fade">
                  <img />
                </transition>
              </div>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Just Meats</h2>
            <article v-for="meat in menu.meats" :key="meat.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ meat.item }}</h3>
                <input
                  type="number"
                  v-model="meat.quantity"
                  id="quantity"
                  min="0"
                  max="20"
                  pattern="[0-9]*"
                  oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                />
                <button
                  class="button xs-px1 md-px3 xs-py1"
                  @click="cartAdd(meat.item, meat.quantity, meat.price)"
                >${{ meat.price }}</button>
              </div>
              <p class="xs-my1">{{ meat.description }}</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Our Sides</h2>
            <article v-for="side in menu.sides" :key="side.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ side.item }}</h3>
                <input
                  type="number"
                  v-model="side.quantity"
                  id="quantity"
                  min="0"
                  max="20"
                  pattern="[0-9]*"
                  oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                />
                <button
                  class="button xs-px1 md-px3 xs-py1"
                  @click="cartAdd(side.item, side.quantity, side.price)"
                >${{ side.price }}</button>
              </div>
              <p class="xs-my1">{{ side.description }}</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Extras</h2>
            <article v-for="extra in menu.extras" :key="extra.item" class="xs-my2">
              <div class="xs-flex">
                <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr4">{{ extra.item }}</h3>
                <input
                  type="number"
                  v-model="extra.quantity"
                  id="quantity"
                  min="0"
                  max="20"
                  pattern="[0-9]*"
                  oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                />
                <button
                  class="button xs-px1 md-px3 xs-py1"
                  @click="cartAdd(extra.item, extra.quantity, extra.price)"
                >${{ extra.price }}</button>
              </div>
              <p class="xs-my1">{{ extra.description }}</p>
            </article>
          </section>
          <section class="xs-py2 xs-px2 md-px4">
            <h2 class="main-title">Checkout Review</h2>
            <article
              v-for="cartitem in cart"
              :key="cartitem.item"
              class="xs-my4 xs-px2 md-mx6 xs-border-bottom-lighter"
            >
              <div class="xs-flex">
                <h3 class="secondary-title xs-flex xs-flex-grow-1 xs-mr4">{{ cartitem.item }}</h3>
                <p class="xs-my1">{{ cartitem.quantity }}</p>
              </div>
            </article>
            <div class="xs-flex">
              <h3 class="main-title xs-flex xs-flex-grow-1 xs-mr4">Total</h3>
              <p class="main-title xs-my1">${{ total() }}</p>
            </div>
          </section>
          <contentComponent />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import contentComponent from "@/components/contentComponent";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    contentComponent
  },
  /** Get data on Server Side: */
  async fetch({ app, store }) {
    if (process.browser) return;
    try {
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      await store.dispatch("bindnumber");
      store.dispatch("unbindnumber");
    } catch (e) {
      console.error(e);
    }
  },
  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      await this.$store.dispatch("bindnumber");
    } catch (e) {
      console.error(e);
    }
  },
  name: "Index",
  data() {
    return {
    };
  },
  computed: {
    cta() {
      return this.$store.state.cta;
    },
    notice() {
      return this.$store.state.notice;
    },
    menu() {
      return this.$store.state.menu;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
    methods: {
    cartAdd(item, quantity, price) {
      let plate = this.plate
      plate = { 
        item: item,
        quantity: quantity,
        price: price,
      };
      this.$store.commit("addToCart", plate);
    },
    total() {
      var total = 0
      this.cart.forEach(function(s) {
          total += s.price * s.quantity || 0;
      });
      return total;
    },
  },
}
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
  flex-flow: row-reverse !important;
}
.plate:nth-of-type(even) div {
  display: flex;
  align-items: flex-end;
  flex-flow: column !important;
}
@media only screen and (max-width: 40rem) {
  .plate:nth-of-type(even) {
    flex-flow: column-reverse !important;
  }
  .plate:nth-of-type(even) div {
    align-items: flex-start;
  }
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
