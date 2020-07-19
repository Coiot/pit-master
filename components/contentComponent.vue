<template>
  <div class="container">
    <div>
      <h2 class="secondary-title">Testing the Slot Counter</h2>
      <p>Remaining Slots: {{ orders }}</p>
      <div class="links">
        <button class="button xs-px3 xs-py1" @click="changeCount(-1)">-1</button>
        <button class="button xs-px3 xs-py1" @click="changeCount(1)">+1</button>
      </div>
    </div>
    <Modal v-if="orders === 1" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "@/components/Modal";

export default {
    components: {
    Modal
  },
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