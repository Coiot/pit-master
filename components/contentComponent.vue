<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-fire-vuexfire-example</h1>
      <h2 class="subtitle">
        Example project showcasing the use of @nuxtjs/firebase together with
        vuexfire.
      </h2>
      <h3>Count</h3>
      <p>Total: {{ orders }}</p>
      <div class="links">
        <div class="button--green" @click="changeCount(-1)">-1</div>
        <div class="button--green" @click="changeCount(1)">+1</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["orders"])
  },
  methods: {
    changeCount(amount) {
      const increment = this.$fireStoreObj.FieldValue.increment(amount);
      this.$fireStore
        .collection("slots")
        .doc("number")
        .update({ orders: increment });
    }
  }
};
</script>