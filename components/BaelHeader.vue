<template>
  <nav ref="navBar" id="navbar" class="sm-border-bottom wrapper">
    <div class="r">
      <div class="c-12 xs-text-left xs-p2">
        <div class="item">
          <nuxt-link class="sitename" to="/" exact>{{headerSiteName}}</nuxt-link>&nbsp;&nbsp;
          <span class="red">|</span>
          &nbsp;
          <nuxt-link to="/about">Our Story</nuxt-link>&nbsp;
          <!-- <span class="red">|</span>
            &nbsp;
          <nuxt-link to="/community">Community</nuxt-link>&nbsp;-->
          <span class="red">|</span>
          &nbsp;
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>
      </div>

      <!-- <div
        class="c-3 xs-border-top xs-border-bottom sm-border-top-none sm-border-bottom-none sm-border-left sm-border-right xs-p2 xs-collapse"
      >
        <div class="item xs-flex">
          <VueFuse
            placeholder="Blog Search"
            :compResults="compResults"
            :keys="keys"
            :list="allPosts"
            event-name="searchChanged"
          />
        </div>
      </div>-->
    </div>
  </nav>
</template>
<script>
// import VueFuse from "~/components/VueFuse";
export default {
  props: ["posts"],
  data() {
    return {
      results: [],
      keys: [
        {
          name: "title",
          weight: 0.3,
        },
        {
          name: "body",
          weight: 0.7,
        },
      ],

      compResults: [],
    };
  },
  // components: {
  //   VueFuse,
  // },
  computed: {
    allPosts() {
      let posts = this.$store.state.blogPosts;
      let pages = this.$store.state.allPages;
      let both = posts.concat(pages);
      return both;
    },
    headerSiteName() {
      return this.$store.state.siteInfo.sitename;
    },
    logo() {
      return this.$store.state.siteInfo.siteicon;
    },
    componentResults() {
      return this.$store.state.results;
    },
    crumb() {
      return this.$store.state.theCrumb;
    },
  },

  methods: {
    navHeight() {
      var height = document.getElementById("navbar").clientHeight;
      console.log(height);
      this.$store.commit("SET_NAVHEIGHT", height - 1);
    },
  },

  mounted() {
    this.$on("searchChanged", (results) => {
      this.compResults = results;
    });
  },
};
</script>
<style>
#navbar {
  z-index: 999;
}

.titlebar .item {
  overflow-x: none;
}

.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}

.results li {
  list-style-type: none;
  margin-left: 0;
}

nav {
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
}

.logo {
  height: 1.5rem;
  width: auto;
}

.sitename {
  color: #ee4231 !important;
  font-family: "Bitter", serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
}

@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>
