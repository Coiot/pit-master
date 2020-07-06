<template>
  <section>
    <h3 class="main-title">{{ faq.title }}</h3>
    <p>{{ faq.body }}</p>
    <article v-for="question in faq.questions" :key="question.question">
      <h3 class="secondary-title">{{ question.question }}</h3>
      <p>{{ question.answer }}</p>
    </article>
  </section>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    faq() {
      return this.$store.state.faq;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
