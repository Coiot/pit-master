<template>
  <main class="clearfix">
    <div class="full-height single">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <section class="cta col xs-col-12 xs-my4">
            <div class="xs-flex xs-flex-justify-center xs-flex-align-center">
              <div class="xs-col-4 xs-px3 md-py2 xs-hide sm-hide md-flex xs-flex-justify-center">
                <img
                  style="width:280px; background-color: #fff; border-radius: 100%; box-shadow: 3px 3px 2px #30333e"
                  class="xs-block"
                  v-if="this.$store.state.siteInfo.siteicon  && this.$store.state.siteInfo.showmenu"
                  :src="this.$store.state.siteInfo.siteicon"
                  :alt="menuSiteName"
                />
              </div>
              <div
                v-if="orders >= 1"
                class="white xs-col-8 xs-px2 xs-mb3 md-py5 md-px5 md-py5 xs-mb0"
              >
                <h1 class="white xs-pt4 xs-pb3 main-title">{{ cta.title }}</h1>
                <p class="secondary-title">{{ cta.body }}</p>
                <!-- <p class="secondary-title xs-pt1">
                Only
                <span v-if="orders <= 5" class="bigger">{{ orders }}</span>
                <span v-else class="big">{{ orders }}</span> Slots Left!!
                </p>-->
              </div>
              <div v-else class="cta col xs-col-12 xs-p6 xs-mb4">
                <h1 class="white xs-pt4 xs-py3 main-title">Sold Out!</h1>
                <p
                  class="white secondary-title xs-my2"
                >All available slots for this week are filled. Follow us on social media to know when we'll be grilling again.</p>
              </div>
            </div>
          </section>
          <Modal v-if="orders === 1" />
          <!-- <section class="col xs-col-12 xs-p2 xs-px2 xs-my3 md-px3 card">
            <h2 class="secondary-title">{{ notice.title }}</h2>
            <p>{{ notice.body }}</p>
          </section>-->
          <section v-if="!menu.plates.length" class="col xs-col-12 xs-py2 xs-px1 xs-my4 md-px4">
            <h2 class="section-title main-title xs-py1">Barbecue Plates</h2>
            <article
              v-for="plate in menu.plates"
              :key="plate.item"
              class="plate xs-flex xs-flex-column-reverse md-flex-row xs-my6 md-my4 xs-py1 md-py2"
            >
              <div v-if="plate.active === true">
                <div class="col xs-col-12 md-col-6 xs-px0 md-px2 xs-mt2">
                  <h3 class="plate-title main-title xs-mt4">{{ plate.item }}</h3>
                  <p class="xs-pb1 secondary-title">{{ plate.includes }}</p>
                  <p class="xs-mb2">{{ plate.description }}</p>
                  <select
                    class="xs-p1 select"
                    v-if="plate.side1"
                    v-model="side1"
                    name="sides"
                    required
                  >
                    <option value disabled selected hidden>Pick a Side</option>
                    <option value="Southern Mac n’ Cheese">Southern Mac n’ Cheese</option>
                    <option
                      value="Smoked Jalapeno n’ Brisket Beans"
                    >Smoked Jalapeno n’ Brisket Beans</option>
                    <option value="Mexican Street Corn Salad">Mexican Street Corn Salad</option>
                    <option value="Coleslaw">Coleslaw</option>
                    <option value="Banana Pudding">Banana Pudding</option>
                    <option value="Tortillas">Tortillas</option>
                  </select>
                  <select
                    class="xs-p1 select"
                    v-show="plate.side2"
                    v-model="side2"
                    name="sides"
                    required
                  >
                    <option value disabled selected hidden>Pick another Side</option>
                    <option value="Southern Mac n’ Cheese">Southern Mac n’ Cheese</option>
                    <option
                      value="Smoked Jalapeno n’ Brisket Beans"
                    >Smoked Jalapeno n’ Brisket Beans</option>
                    <option value="Mexican Street Corn Salad">Mexican Street Corn Salad</option>
                    <option value="Coleslaw">Coleslaw</option>
                    <option value="Banana Pudding">Banana Pudding</option>
                    <option value="Tortillas">Tortillas</option>
                  </select>
                  <!-- <input
                  v-show="plate.side2"
                  v-model="side2"
                  name="sides"
                  list="sides"
                  placeholder="Pick another Side"
                  type="search"
                  class="xs-p1"
                />
                <datalist id="sides">
                  <option value="Southern Mac n’ Cheese"></option>
                  <option value="Smoked Jalapeno n’ Brisket Beans"></option>
                  <option value="Mexican Street Corn Salad"></option>
                  <option value="Coleslaw"></option>
                  <option value="Banana Pudding"></option>
                  <option value="Tortillas"></option>
                  </datalist>-->
                  <label class="label" for="plate.quantity">Quanitity:</label>
                  <input
                    type="number"
                    v-model="plate.quantity"
                    id="plate.quantity"
                    class="xs-p1"
                    min="0"
                    max="20"
                    pattern="[0-9]*"
                    oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                  />
                  <button
                    class="button xs-px3 xs-py2 xs-my1"
                    @click="cartAdd(plate.item, plate.quantity, plate.price, side1, side2, sauce)"
                  >+ ${{ plate.price }}</button>
                </div>
                <div class="col xs-col-12 md-col-6">
                  <transition appear name="fade">
                    <img :src="plate.image" :alt="plate.item" />
                  </transition>
                </div>
              </div>
            </article>
          </section>
          <section class="xs-py2 xs-px1 md-px4">
            <h2 class="section-title main-title">Just Meats</h2>
            <article v-for="meat in menu.meats" :key="meat.item" class="xs-my2">
              <div v-if="meat.active === true">
                <div class="xs-flex xs-flex-column sm-flex-row">
                  <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr2">{{ meat.item }}</h3>
                  <label class="label" for="meat.quantity">Quanitity:</label>
                  <input
                    type="number"
                    v-model="meat.quantity"
                    id="meat.quantity"
                    class="xs-p1"
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
              </div>
            </article>
          </section>
          <section v-if="menu.sides.length" class="xs-py2 xs-px1 md-px4">
            <h2 class="section-title main-title">Our Sides</h2>
            <article v-for="side in menu.sides" :key="side.item" class="xs-my2">
              <div v-if="side.active === true">
                <div class="xs-flex xs-flex-column sm-flex-row">
                  <h3
                    class="secondary-title leaders xs-flex xs-flex xs-flex-grow-1 xs-mr2"
                  >{{ side.item }}</h3>
                  <label class="label" for="side.quantity">Quanitity:</label>
                  <input
                    type="number"
                    v-model="side.quantity"
                    id="side.quantity"
                    class="xs-p1"
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
              </div>
            </article>
          </section>
          <section v-if="!menu.meats.length" class="xs-py2 xs-px1 md-px4">
            <h2 class="section-title main-title">Extras</h2>
            <article v-for="extra in menu.extras" :key="extra.item" class="xs-my2">
              <div v-if="extra.active === true">
                <div class="xs-flex xs-flex-column sm-flex-row">
                  <h3 class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr2">{{ extra.item }}</h3>
                  <label class="label" for="extra.quantity">Quanitity:</label>
                  <input
                    type="number"
                    v-model="extra.quantity"
                    id="extra.quantity"
                    class="xs-p1"
                    min="0"
                    max="20"
                    pattern="[0-9]*"
                    oninput="(!validity.rangeOverflow||(value=10)) && (!validity.rangeUnderflow||(value=1)) &&(!validity.stepMismatch||(value=parseInt(this.value)));"
                  />
                  <button
                    class="button xs-px1 md-px3 xs-py1"
                    @click="cartAdd(extra.item, extra.quantity, extra.price, side1, side2, sauce)"
                  >${{ extra.price }}</button>
                </div>
                <p class="xs-my1">{{ extra.description }}</p>
                <select
                  class="xs-p1 select"
                  v-show="extra.sauce"
                  v-model="sauce"
                  name="sauce"
                  required
                >
                  <option value disabled selected hidden>Pick a Sauce</option>
                  <option value="Dark">Dark — Tangy and Rich</option>
                  <option value="White">White — Perfect on Poultry</option>
                  <option value="Vinegar">Vinegar — Tangy and thin</option>
                  <option value="Bank Street">Bank Street Sauce — Muy Caliente!</option>
                </select>
              </div>
            </article>
          </section>
          <section v-if="!menu.meats.length" class="xs-py2 xs-px1 md-px4">
            <h2 class="section-title main-title">Delivery</h2>
            <article v-for="delivery in menu.delivery" :key="delivery.item" class="xs-my2">
              <div v-if="delivery.active === true">
                <div class="xs-flex xs-flex-column sm-flex-row">
                  <h3
                    class="secondary-title leaders xs-flex xs-flex-grow-1 xs-mr2"
                  >{{ delivery.item }}</h3>
                  <button
                    class="button xs-px1 md-px3 xs-py1"
                    @click="cartAdd(delivery.item, delivery.quantity, delivery.price)"
                  >${{ delivery.price }}</button>
                </div>
                <p class="xs-my1">{{ delivery.description }}</p>
              </div>
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
                    <span v-if="cartitem.sauce">{{ cartitem.sauce }}</span>
                    {{ cartitem.item }}
                    <small
                      v-if="cartitem.side1"
                    >+ {{ cartitem.side1 }}</small>
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
          </section>
          <div class="total xs-flex xs-px4 xs-pt2">
            <h3 class="main-title xs-flex xs-flex-grow-1">Total</h3>
            <p class="main-title xs-my1">${{ total() }}</p>
          </div>
          <section v-if="orders < 1" class="xs-py2 xs-px1 md-px4">
            <h4 class="main-title">Oh no!</h4>
            <h5 class="secondary-title">All available order slots have been taken this week.</h5>
            <p class="xs-my1">We are not accepting new orders at this time.</p>
            <p
              class="xs-my1"
            >However, if you simply must have some BBQ soon, contact us to see if we can squeeze another order in, or if someone has canceled.</p>
            <p
              class="xs-my1"
            >Check tabs on this site and our social media for when we open up orders again.</p>
          </section>
          <section v-else class="xs-py2 xs-px1 md-px4">
            <div v-if="cartUIStatus === 'idle'" class="payment">
              <p class="form-row">
                <label class="form-label" for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-input"
                  placeholder="Enter Name"
                  v-model="stripeCustomer"
                  required
                />
                <span class="input-focus" aria-hidden="true"></span>
              </p>
              <p class="form-row xs-mt2">
                <label class="form-label" for="phone">Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  class="form-input"
                  placeholder="Enter Phone Number"
                  v-model="stripePhone"
                  required
                />
                <span class="input-focus" aria-hidden="true"></span>
              </p>
              <!-- <p class="form-row xs-mt2">
                <label class="form-label" for="address">Address</label>
                <input
                  type="address"
                  name="address"
                  id="address"
                  class="form-input"
                  v-model="stripeAddress"
                  placeholder="Enter Address if Delivery"
                />
                <span class="input-focus" aria-hidden="true"></span>
              </p>-->
              <h3 class="secondary-title xs-mt3">Please enter your payment details:</h3>
              <p class="form-row xs-mt2">
                <label class="form-label" for="email">Email</label>

                <input
                  class="form-input"
                  id="email"
                  type="email"
                  v-model="stripeEmail"
                  placeholder="name@example.com"
                />
              </p>
              <div class="form-row xs-mt2">
                <label for="card">Credit Card</label>
                <br />
                <card
                  class="stripe-card"
                  id="card"
                  :class="{ complete }"
                  stripe="pk_live_51H9Hb9ELeQTfYocAbtIFhNy4JURr9e77qfDE8wCMTMeOfmDJt7szS6YCSEIHoBbEKu5tvqtGauDFgPNqTKSSwldt00tmYWoi4g"
                  :options="stripeOptions"
                  @change="complete = $event.complete"
                />
                <small class="card-error">{{error}}</small>
              </div>
              <button
                class="pay-with-stripe button xs-mt2 xs-ml0"
                style="max-width: 100%;"
                @click="pay"
                :disabled="!complete || !stripeEmail || loading"
              >Pay with credit card</button>
            </div>

            <div v-else class="statussubmit">
              <div v-if="cartUIStatus === 'failure'">
                <h4 class="secondary-title">Oh No!</h4>
                <p class="xs-my1">Something went wrong!</p>
                <button class="button" @click="clearCart">Please try again</button>
              </div>

              <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
                <h4>Please hold, we're filling up your cart with goodies</h4>
                <p>Placeholder loader</p>
              </div>

              <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
                <h4 class="secondary-title">Success! Your order is in.</h4>
                <p class="xs-my1">An email receipt will appear in your inbox shortly.</p>
                <p
                  class="xs-my1"
                >We'll contact you the day of the grilling when your order is ready for pickup or delivery.</p>
                <p
                  class="xs-my1"
                >If you need to cancel your order, we offer refunds before 48 hours of the grilling day.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Modal from "@/components/Modal";
import { mapState, mapGetters } from "vuex";
import { Card, handleCardPayment } from "vue-stripe-elements-plus";
import axios from "axios";
export default {
  components: { Card, Modal },
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
      error: "",
      loading: false,
      side1: "",
      side2: "",
      sauce: "",
      tempcart: [],
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
    cartUIStatus() {
      return this.$store.state.cartUIStatus;
    },
    stripeEmail: {
      get() {
        return this.$store.state.stripeEmail;
      },
      set(value) {
        this.$store.commit("Email", value);
      },
    },
    stripeCustomer: {
      get() {
        return this.$store.state.stripeCustomer;
      },
      set(value) {
        this.$store.commit("Customer", value);
      },
    },
    stripePhone: {
      get() {
        return this.$store.state.stripePhone;
      },
      set(value) {
        this.$store.commit("Phone", value);
      },
    },
    stripeAddress: {
      get() {
        return this.$store.state.stripeAddress;
      },
      set(value) {
        this.$store.commit("Address", value);
      },
    },
    ...mapGetters(["orders"]),
  },
  methods: {
    cartAdd(item, quantity, price, side1, side2, sauce) {
      let plate = this.plate;
      plate = {
        item: item,
        quantity: quantity,
        price: price,
        side1: side1,
        side2: side2,
        sauce: sauce,
      };
      this.tempcart.push(plate);
      this.$store.commit("addToCart", plate);
      this.sauce = "";
      this.side1 = "";
      this.side2 = "";
    },
    total() {
      var total = 0;
      this.cart.forEach(function (s) {
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
      this.$store.dispatch("createPaymentIntent");
      this.loading = true;
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style>
.cta {
  background: url(https://pit-master.netlify.app/images/uploads/banner_home2.jpg)
    no-repeat center center fixed;
  background-size: cover;
  font-size: 120%;
  letter-spacing: 0.05em;
}

.white {
  color: white;
  text-shadow: 3px 3px 1px #30333e, -1px -1px 1px #abc4dc, 0 0 3px #1a1a1a,
    0 0 8px #1a1a1a, 0 0 10px #1a1a1a, 0 0 12px #1a1a1a;
}

.big {
  font-size: 1.5em;
}

.bigger {
  font-size: 1.8em;
}

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
.section-title {
  border-bottom: #ee4231 2px solid;
  padding: 0 2em 0.1em;
  margin: 0 0 0.6em;
  text-align: center;
  font-size: 4rem;
}
.button {
  background-color: #ee4231 !important;
  font-size: 1.6em !important;
  font-family: "Bitter", serif !important;
  font-weight: 900 !important;
  line-height: 1.1 !important;
  margin-left: 0.4em;
}
.plate-title {
  display: inline-flex;
  width: fit-content;
  border-radius: 2px;
  color: #fff;
  background-color: #ee4231;
  padding: 0.3em 1em;
  margin: 0px 0 0.4em;
  text-align: center;
}
.plate:nth-of-type(even) {
  text-align: right;
  flex-flow: row-reverse !important;
}
.plate:nth-of-type(even) div {
  text-align: right;
  align-items: flex-end;
  flex-flow: column !important;
}
.total {
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: whitesmoke;
}

.label {
  font-size: 1.2rem;
  font-weight: 800;
  align-self: center;
  margin-right: 0.5em;
}

input[type="number"] {
  border: #5cacd7 1px solid !important;
  border-radius: 3px !important;
}

.form-row input,
textarea,
.select {
  width: -webkit-fill-available;
  max-width: 50ch;
  cursor: pointer;
  color: #ee4231;
  border: #5cacd7 1px solid !important;
  border-radius: 3px !important;
  padding: 0.5em;
  transition: all 0.02s ease-in-out;
}

.stripe-card {
  color: #ee4231 !important;
  line-height: 25px !important;
  font-family: "Bitter", serif !important;
  font-size: 16px !important;
  max-width: 50ch !important;
  background-color: #fff !important;
  border: #5cacd7 1px solid !important;
  border-radius: 3px !important;
  padding: 0.5em !important;
  margin: 0 0 0.5em;
}

.select:hover,
.select:active,
input:hover,
input:active {
  border: #5cacd7 1px solid !important;
}

.select + .select {
  margin: 0.5em 0;
}

.xs-border,
.xs-border-left,
.xs-border-right,
.xs-border-top,
.xs-border-bottom,
.xs-border-bottom-lighter,
.sm-border,
.sm-border-left,
.sm-border-right,
.sm-border-top,
.sm-border-bottom,
.sm-border-bottom-lighter,
.card {
  border-color: #80d3ff !important;
}
@media only screen and (max-width: 80rem) {
  .cta {
    background: url(https://pit-master.netlify.app/images/uploads/banner_home2.jpg)
      no-repeat center center;
    background-size: cover;
    font-size: 90% !important;
  }

  .button {
    margin-left: 0.3em;
  }
}
@media only screen and (max-width: 40rem) {
  .cta {
    font-size: 85% !important;
  }
  .section-title {
    padding: 0 0.5em 0.1em;
    margin: 0 0 0.3em;
  }
  .plate-title {
    display: flex;
    padding: 0.2em 0.6em;
    margin: 0 0 0.3em;
  }
  .plate:nth-of-type(even) {
    flex-flow: column-reverse !important;
  }
  .plate:nth-of-type(even) div {
    text-align: left;
    align-items: flex-start;
  }

  label {
    margin-top: 0.5rem;
  }

  .label {
    font-size: 1.1rem;
    font-weight: 500;
    align-self: flex-start;
  }

  input {
    align-self: flex-start;
    margin-top: 0.5rem;
  }

  .button {
    max-width: 30%;
    margin-top: 0.5rem;
    margin-left: 0;
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
