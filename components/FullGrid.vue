<template>
  <div class>
    <div class :style="`margin-top:${navbarheight}px;`">
      <div class="col xs-col-12 md-col-9">
        <div
          v-if="items2[pi]"
          v-for="(p,pi) in items2"
          :key="p.pi"
          class="xs-p3"
          :style="`height:calc(50vh - 0px);`"
        >
          <div
            class="item xs-block xs-flex xs-relative xs-flex-align-start xs-flex-justify-end xs-text-left"
          >
            <div class="xs-text-left xs-flex xs-flex-justify-end xs-flex-align-end xs-width-auto">
              <div class="full-bg-link xs-text-2">
                <nuxt-link class="xs-text-10" :to="p._path">{{p.title}}</nuxt-link>
                <span class="xs-text-8">| {{p.category}}</span>
              </div>
            </div>
            <nuxt-link :to="p._path">
              <img v-lazy="p.thumbnail" :key="p.thumbnail" class="full-bg-image" />

              <div v-if="!p.thumbnail" class="full-bg-color"></div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <aside class="col xs-col-12 md-col-3 xs-p2">
        <h3 class="secondary-title xs-pb2">All Posts</h3>
        <ul class="list-unstyled">
          <li
            v-for="(pg,i) in blogPosts"
            :key="`pg-${i}`"
            class="zap-slideout-menu-item--small xs-mb2 xs-text-2"
          >
            <nuxt-link :to="pg._path">{{pg.title}}</nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "allitems"],
  data() {
    return {
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0,
      items2: [],
      query: 1,
      busy: false,
      count: 0
    };
  },
  methods: {
    loadMore() {
      this.count = this.offset;
      if (this.total > this.count && this.busy == false) {
        this.busy = true;

        this.items2.splice(0);
        for (var i = 0, j = 2; i < j; i++) {
          let api = this.allitems[this.count];

          this.items2.push(api);
          this.count++;
        }

        this.busy = false;
      }
    },

    onResize(event) {
      this.navHeight();
    },

    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height - 1);
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    $route({ params, query }) {
      if (this.$route.query.page > 1) {
        this.loadMore();
        this.navHeight();
      } else if (this.$route.query.page == null) {
        this.$route.query.page = 1;
        this.loadMore();
        this.navHeight();
      } else {
        this.loadMore();
        this.navHeight();
      }
    },
    queryParam: function() {
      this.loadMore();
    }
  },
  computed: {
    offset() {
      if (this.queryParam > 1) {
        return Number(this.queryParam - 1) * 2;
      } else {
        return 0;
      }
    },
    prevpage() {
      var prev = Number(this.queryParam) - 1;
      return prev;
    },
    nextpage() {
      var next = Number(this.queryParam) + 1;
      return next;
    },
    navbarheight() {
      return this.$store.state.navheight;
    },
    total() {
      return this.allitems.length;
    },
    queryParam() {
      if (this.$route.query.page == null) {
        return 1;
      } else {
        return Number(this.$route.query.page);
      }
    },
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },

  updated() {
    this.$nextTick(() => {
      this.navHeight();
      this.$store.commit("SET_GRIDOFFSET", this.offset);
    });
  },
  mounted() {
    if (process.browser) {
      this.loadMore();

      this.$nextTick(() => {
        this.navHeight();
        window.addEventListener("resize", this.onResize);
      });
    }
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style>
img[lazy="loading"] {
  opacity: 0;
  transition: 0.8s all;
  transition-delay: 0.8s;
}
img[lazy="loaded"] {
  opacity: 1;
  transition: 0.8s all;
  transition-delay: 0.8s;
}
.nobg-link {
  font-size: calc(1.4rem + 2vw);
}
.full-bg-link {
  z-index: 2;
  padding: 1.4rem;
  transition: 0.8s all;
  font-size: 1rem;
  font-family: "Bitter", serif;
  font-weight: 800;
  color: #000;
}
.item-txt {
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 19%,
    rgba(247, 247, 247, 1) 100%
  );
}
.full-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  max-height: calc(50vh - 3rem);
  transition: 0.4s all;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.item .full-bg-link {
  background: #fff;
  transition: 0.8s all;
  border: #5cacd7 1px solid;
}
.full-bg-link h2 {
  margin: 0;
}
</style>
