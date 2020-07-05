<template>
  <section>
    <h3 class="main-title">{{ section.title }}</h3>
    <p>{{ section.body }}</p>
    <article v-for="question in questions" :key="question.question">
      <h3 class="secondary-title">{{ question.question }}</h3>
      <p>{{ question.answer }}</p>
    </article>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      questions: [
        {
          question: "Refunds?",
          answer: "Sure thing."
        },
        {
          question: "Peanuts?",
          answer: "None whatsover."
        },
        {
          question: "Do you deliver?",
          answer: "From here to the moon."
        },
        {
          question: "How many calories?",
          answer: "Two day's worth of protein."
        }
      ],
      section: {
        title: "Frequently Asked Questions",
        body:
          "Before you send us a message, read our most commonly addressed questions. Save time with a response already here."
      }
    };
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
