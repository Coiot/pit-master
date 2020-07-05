<template>
  <footer class="fill-gray-lighter xs-text-6 md-text-5">
    <div class="r no-gap">
      <div class="c-12 xs-text-left xs-p2 xs-border">
        <div style="z-index:55;" class="c-12 xs-p0 xs-text-8">
          <div class="item">
            <nuxt-link to="/" exact>Home</nuxt-link>&nbsp;
            <span class="text-gray-lightest">|</span>
            &nbsp;
            <nuxt-link to="/about">Our Story</nuxt-link>&nbsp;
            <span class="text-gray-lightest">|</span>
            &nbsp;
            <nuxt-link to="/community">Community</nuxt-link>&nbsp;
            <span class="text-gray-lightest">|</span>
            &nbsp;
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>
        </div>
      </div>
      <div class="c-6 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div v-show="siteDescription" class="footer__heading xs-mb2">What is JM BBQ all about?</div>
          <p v-show="siteDescription">{{siteDescription}}</p>
        </div>
      </div>
      <div class="c-6 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div
            v-show="connectData"
            class="footer__heading xs-mb2"
          >Follow us for all the latest Updates</div>
          <ul class="list-unstyled">
            <li v-show="connectData" v-for="(c,i) in connectData" :key="i">
              <a :href="c.url">{{c.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border">
        <div class="item xs-text-6">
          <p>Copyright 2020</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    connectData() {
      return this.$store.state.connect.connectlinks;
    },
    siteDescription() {
      return this.$store.state.siteInfo.sitedescription;
    }
  }
};
</script>

<style scoped>
.text-input {
  max-width: 100%;
}

.footer__heading {
  max-width: 100%;
  text-transform: none;
}
</style>
