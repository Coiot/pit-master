<template>
  <div
    class="zap-slideout xs-border xs-text-6 md-text-5"
    :class="{ isOpen: $store.state.menuIsActive  }"
  >
    <div class="zap-slideout-opener">
      <div
        @click="toggle"
        class="hamburger hamburger--spin js-hamburger"
        :class="{'is-active': $store.state.menuIsActive }"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
    <ul class="zap-slideout-menu list-unstyled black-font">
      <li class="zap-slideout-menu-item menu-header">
        <img
          style="width:220px;"
          class="xs-block xs-mb2"
          v-if="this.$store.state.siteInfo.siteicon  && this.$store.state.siteInfo.showmenu"
          :src="this.$store.state.siteInfo.siteicon"
          :alt="menuSiteName"
        />
        Quick Links
      </li>
      <li class="zap-slideout-menu-item--small">
        <nuxt-link to="/" exact>Order Here</nuxt-link>
      </li>
      <li class="zap-slideout-menu-item--small">
        <nuxt-link to="/about" exact>Our Story</nuxt-link>
      </li>
      <!-- <li class="zap-slideout-menu-item--small">
        <nuxt-link to="/community" exact>Community</nuxt-link>
      </li>-->
      <li class="zap-slideout-menu-item--small">
        <nuxt-link to="/contact" exact>Contact Form</nuxt-link>
      </li>
      <li class="xs-mt2 md-mt4 zap-slideout-menu-item menu-header">Contact Info</li>
      <li class="zap-slideout-menu-item--small">
        <a href="tel:503-967-9755">(503) 967-9755</a>
      </li>
      <!-- <li class="zap-slideout-menu-item--small">
        <a href="https://goo.gl/maps/GHJYXdxoinF7DoRTA">3307 NE 142nd ave</a>
      </li>-->
      <li class="zap-slideout-menu-item--small">
        <a href="mailto:joshmotesbbq@gmail.com">joshmotesbbq@gmail.com</a>
      </li>
      <li v-if="menuLinks" class="xs-mt2 md-mt4 zap-slideout-menu-item menu-header">Social Media</li>
      <li
        v-if="menuLinks"
        v-for="m in menuLinks"
        :key="m.position"
        class="zap-slideout-menu-item--small"
      >
        <a :href="m.link">{{m.name}}</a>
      </li>
    </ul>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    menuLinks() {
      return this.$store.state.siteInfo.menu;
    },
    myPages() {
      return this.$store.state.allPages;
    },

    menuSiteName() {
      return this.$store.state.siteInfo.sitename;
    },
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      // Look for .hamburger
      this.$store.commit("toggleMenuState");

      var hamburger = document.querySelector(".hamburger");
      // On click

      // Toggle class "is-active"

      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>
  <style lang="scss" scoped>
a {
}

.menu-header {
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 900;
}
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 5px;
  background-color: #ee4231;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.zap-slideout {
  position: fixed;
  right: 0;
  top: 0;
  width: 25vw;
  height: 100vh;
  z-index: 1000;
  padding: 16px;
  background-color: #fff;
  transform: translate3D(100%, 0, 0);
  transition: transform 0.6s;

  &.isOpen {
    transform: translate3D(0, 0, 0);
    transition: transform 0.6s;
  }
}

.zap-slideout-opener {
  position: absolute;
  top: -4px;
  right: 100%;
  transform: scale(0.5);
  margin-right: 0px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.zap-slideout-menu {
  transition: transform 1.6s ease(out-cubic);
}

.zap-slideout-menu-item--small {
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 800;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 18px;
  }
}

.zap-slideout-menu-item {
  & + .zap-slideout-menu-item--small {
    margin-top: 16px;
  }
}

.zap-slideout-menu-item--small {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media only screen and (max-width: 40rem) {
  .zap-slideout {
    width: 60vw;
  }

  .zap-slideout-menu-item--small {
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;

    & + & {
      margin-top: 9px;
    }
  }

  .zap-slideout-menu-item {
    & + .zap-slideout-menu-item--small {
      margin-top: 14px;
    }
  }
  img {
    width: 50px;
  }
}
</style>
