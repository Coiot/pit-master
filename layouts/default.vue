<template>
  <section class="container xs-border xs-text-5 md-text-4">
    <BaelHeader :blogtitle="blogtitle" :thecrumb="this.$store.state.theCrumb" :posts="blogposts" />
    <nuxt />
    <SlideOut />
    <BaelFooter :pagination="paginate" />
  </section>
</template>
<script>
import SlideOut from "~/components/SlideOut";
import BaelFooter from "~/components/BaelFooter";
import BaelHeader from "~/components/BaelHeader";

export default {
  data() {
    return {};
  },

  methods: {
    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height - 1);
      }
    },
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default updated");
      });
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default mounted");
      });
    }
  },
  computed: {
    paginate() {
      return this.$store.state.pagination;
    },
    blogposts() {
      return this.$store.state.blogPosts;
    },
    blogtitle() {
      return this.$store.state.blogTitle;
    },
  },
  components: {
    SlideOut,
    BaelHeader,
    BaelFooter,
  },
};
</script>


<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Bitter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  background-color: #fbfbfb;
}
p {
  line-height: 1.6;
}
.main-title {
  font-size: 3rem;
  font-family: "Bitter", serif;
  font-weight: 900;
  line-height: 1.2;
  color: #ee4231;
}
.secondary-title {
  font-size: 2em;
  font-family: "Bitter", serif;
  font-weight: 800;
  align-items: flex-end;
}

@media only screen and (max-width: 40rem) {
  .main-title {
    font-size: 1.9rem;
  }
  .secondary-title {
    font-size: 1.6em;
  }
}
.feat-wrapper {
  max-height: 55vh;
  width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(50%, 0);
  opacity: 0;
  transition: all 0.2s;
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-50%, 0);
  opacity: 0;
  transition: all 0.2s;
}
.slide-down-enter,
.slide-up-leave-active {
  transform: translate(0, 50%);
  opacity: 1;
  transition: all 0.2s;
}
.slide-down-leave-active,
.slide-up-enter {
  transform: translate(0, -50%);
  opacity: 1;
  transition: all 0.2s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.post-content {
  max-width: 75ch;
}
</style>
