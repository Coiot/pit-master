<template>
  <div class="xs-mt4">
    <FullGrid :allitems="allBlogPosts"></FullGrid>
    <hr />
    <div class="embedsocial-instagram xs-pt1" data-ref="452ee8ee5ab56640156aabd2b7d5a90a295430df"></div>
    <script>
  (function(d, s, id) {
    var js;
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://embedsocial.com/embedscript/in.js";
    d.getElementsByTagName("head")[0].appendChild(js);
  })(document, "script", "EmbedSocialInstagramScript");
    </script>
    <Shirt />
  </div>
</template>

<script>
import FullGrid from "~/components/FullGrid";
import Shirt from "~/components/Shirt";
export default {
  watchQuery: ["page"],

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: { FullGrid, Shirt },
  data() {
    return {};
  },
  methods: {},
  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
.developed-by a,
.powered-by a {
  display: none !important;
  width: 0 !important;
}
@media only screen and (max-width: 40rem) {
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
