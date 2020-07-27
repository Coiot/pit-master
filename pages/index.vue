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
                  v-if="plate.side1"
                  v-model="side1"
                  name="sides"
                  list="sides"
                  placeholder="Pick a Side"
                />
                <input
                  v-show="plate.side2"
                  v-model="side2"
                  name="sides"
                  list="sides"
                  placeholder="Pick another Side"
                />
                <datalist id="sides">
                  <option value="Southern Mac n’ Cheese"></option>
                  <option value="Smoked Jalapeno n’ Brisket Beans"></option>
                  <option value="Coleslaw"></option>
                  <option value="Banana Pudding"></option>
                </datalist>
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
                  @click="cartAdd(plate.item, plate.quantity, plate.price, side1, side2)"
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
              class="xs-my4 xs-px2 md-mx4 xs-border-bottom-lighter"
            >
              <div class="xs-flex xs-flex-column md-flex-row">
                <div class="xs-flex xs-flex-row xs-flex-grow-1">
                  <h3 class="secondary-title">
                    {{ cartitem.item }}
                    <small v-if="cartitem.side1">+ {{ cartitem.side1 }}</small>
                    <small v-if="cartitem.side2">+ {{ cartitem.side2 }}</small>
                  </h3>
                </div>
                <div class="xs-flex xs-flex-row">
                  <button @click="removeOneFromCart(cartitem)" class="button xs-mr2">-</button>
                  <p class="secondary-title xs-my1 xs-mr2">{{ cartitem.quantity }}</p>
                  <button @click="addOneToCart(cartitem)" class="button xs-mr2">+</button>
                  <button @click="removeAllFromCart(cartitem)" class="button">x</button>
                </div>
              </div>
            </article>
            <div class="xs-flex">
              <h3 class="main-title xs-flex xs-flex-grow-1">Total</h3>
              <p class="main-title xs-my1">${{ total() }}</p>
            </div>
          </section>
          <contentComponent />
          <section class="xs-py2 xs-px2 md-px4">
            <div v-if="cartUIStatus === 'idle'" class="payment">
              <h3>Please enter your payment details:</h3>
              <label for="email">Email</label>
              <br />
              <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
              <br />
              <label for="card">Credit Card</label>
              <br />
              <small>
                Test using these Stripe test credit card numbers with any CVC, postal code, and expiration date in the future:
                <ul>
                  <li>
                    <span class="cc-number">4242 4242 4242 4242</span>
                  </li>
                  <li>
                    <span class="cc-number">4000 0027 6000 3184</span> (requires authentication, will trigger a pop-up)
                  </li>
                  <li>
                    <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
                  </li>
                </ul>
              </small>
              <card
                class="stripe-card"
                id="card"
                :class="{ complete }"
                stripe="pk_test_51H9Hb9ELeQTfYocA9K9qrofOR3zA1I2y5AnXtw4jhrYHeZZrwBUWvjg7U9Rux2paeZRpi9DEg34KD5OCig4DXy6700diLulvgg"
                :options="stripeOptions"
                @change="complete = $event.complete"
              />
              <small class="card-error">{{error}}</small>
              <button
                class="pay-with-stripe button"
                @click="pay"
                :disabled="!complete || !stripeEmail || loading"
              >Pay with credit card</button>
            </div>

            <div v-else class="statussubmit">
              <div v-if="cartUIStatus === 'failure'">
                <h3>Oh No!</h3>
                <p>Something went wrong!</p>
                <button @click="clearCart">Please try again</button>
              </div>

              <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
                <h4>Please hold, we're filling up your cart with goodies</h4>
                <p>Placeholder loader</p>
              </div>

              <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
                <h4>Success!</h4>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import contentComponent from "@/components/contentComponent";
import { mapState, mapGetters } from "vuex";
import { Card, handleCardPayment } from "vue-stripe-elements-plus";
export default {
  components: {
    contentComponent, Card
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
      complete: false,
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: "",
      error: "",
      loading: false,
      side1: '',
      side2: '',
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
    },
    ...mapState(["cartUIStatus"])
  },
    methods: {
    cartAdd(item, quantity, price, side1, side2) {
      let plate = this.plate
      plate = { 
        item: item,
        quantity: quantity,
        price: price,
        side1: side1,
        side2: side2,
      };
      this.$store.commit("addToCart", plate);
      this.side1 = "";
      this.side2 = "";
    },
    total() {
      var total = 0
      this.cart.forEach(function(s) {
          total += s.price * s.quantity || 0;
      });
      return total;
    },
    addOneToCart(cartitem) {
      this.$store.commit("addOneToCart", cartitem);
    },
    removeOneFromCart(cartitem) {
      this.$store.commit("removeOneFromCart", cartitem);
    },
    removeAllFromCart(cartitem) {
      this.$store.commit("removeAllFromCart", cartitem);
    },
    pay() {
      // confirms the payment and will automatically display a
      // pop-up modal if the purchase requires authentication
      this.loading = true;
      handleCardPayment(this.$store.getters.clientSecret, {
        receipt_email: this.stripeEmail
      }).then(result => {
        this.loading = false;
        if (result.error) {
          // show the error to the customer, let them try to pay again
          this.error = result.error.message;
          setTimeout(() => (this.error = ""), 3000);
        } else if (
          result.paymentIntent &&
          result.paymentIntent.status === "succeeded"
        ) {
          // payment succeeded! show a success message
          // there's always a chance your customer closes the browser after the payment process and before this code runs so
          // we will use the webhook in handle-payment-succeeded for any business-critical post-payment actions
          this.$store.commit("updateCartUI", "success");
          setTimeout(this.clearCart, 5000);
        } else {
          this.error = "Some unknown error occured";
          setTimeout(() => (this.error = ""), 3000);
        }
      });
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("clearCart");
    }
  },
  mounted() {
    this.$store.dispatch("createPaymentIntent");
  }

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
  text-align: right;
  align-items: flex-end;
  flex-flow: column !important;
}
@media only screen and (max-width: 45rem) {
  .plate:nth-of-type(even) {
    flex-flow: column-reverse !important;
  }
  .plate:nth-of-type(even) div {
    text-align: left;
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
