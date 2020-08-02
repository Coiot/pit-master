<template>
  <footer class="xs-text-5 md-text-4">
    <div class="r no-gap">
      <div class="c-12 xs-text-left xs-p2 xs-border-top">
        <div style="z-index:55;" class="c-12 xs-p0 xs-text-8">
          <div class="item">
            <nuxt-link to="/" exact>Home</nuxt-link>&nbsp;
            <span class="red">|</span>
            &nbsp;
            <nuxt-link to="/about">Our Story</nuxt-link>&nbsp;
            <span class="red">|</span>
            &nbsp;
            <nuxt-link to="/community">Community</nuxt-link>&nbsp;
            <span class="red">|</span>
            &nbsp;
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>
        </div>
      </div>
      <div class="c-6 xs-p3 xs-border-top">
        <div class="item">
          <div
            v-show="siteDescription"
            class="footer__heading xs-mb2"
          >What is Josh Motes BBQ all about?</div>
          <p v-show="siteDescription">{{siteDescription}}</p>
        </div>
      </div>
      <div class="c-6 xs-p3 xs-border-top">
        <div class="item">
          <div
            v-show="connectData"
            class="footer__heading xs-mb2"
          >Like and Follow for all the latest Updates!</div>
          <ul class="list-unstyled">
            <li v-show="connectData" v-for="(c,i) in connectData" :key="i" class="xs-mb1">
              <a :href="c.url">{{c.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border-top">
        <div class="item xs-text-6 md-text-5">
          <p>
            Copyright ©2020 Josh Motes BBQ. All rights reserved. Images by
            <a
              href="https://www.instagram.com/og.illustration/"
            >OG Illustration</a>. Design & Code by
            <a href="http://isaacvolpe.com">Xican</a>.
          </p>
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
a {
  font-size: 1rem;
}

.list-unstyled a {
  font-size: 1.1rem;
}

.red {
  color: #ee4231;
}

.text-input {
  max-width: 100%;
}

.footer__heading {
  max-width: 100%;
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 1.2;
  color: #ee4231;
  text-transform: none;
}
</style>
