<template>
  <main class="clearfix">
    <div class="full-height single">
      <div class="xs-mt4 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <h1 class="xs-pt4 main-title">About Us</h1>

          <!-- <section class="col xs-col-12 xs-py2">
            <h2 class="xs-py2 main-title">Mission Statement</h2>
            <p>{{ about.mission_statement }}</p>
          </section>-->

          <section class="col xs-col-12 xs-py2">
            <div class="col xs-col-12 md-col-6">
              <transition appear name="fade">
                <img :src="about.image" />
              </transition>
            </div>
            <div class="col xs-col-12 md-col-6 xs-px4">
              <!-- <h2 class="xs-py2 main-title">History</h2> -->
              <p>{{ about.history }}</p>
            </div>
          </section>

          <!-- <section v-if="about.members" class="col xs-col-12 xs-py2 xs-text-center">
            <h2 class="xs-py3 main-title">The Squad</h2>
            <figure
              v-for="member in about.members"
              :key="member.name"
              class="col xs-col-12 md-col-4 xs-p2"
            >
              <transition appear name="fade">
                <img :src="member.image" />
              </transition>
              <figcaption class="secondary-title">{{ member.name }}</figcaption>
              <p>{{ member.bio }}</p>
            </figure>
          </section>

          <section class="col xs-col-12 xs-py2">
            <div class="col xs-col-12 md-col-6">
              <img src="https://pit-master.netlify.app/images/uploads/process0.jpeg" />
            </div>
            <div class="col xs-col-12 md-col-6 xs-px4">
              <h2 class="xs-py2 main-title">The Process</h2>
              <p>{{ about.process }}</p>
            </div>
            <div class="col xs-col-12 xs-py4 xs-text-center">
              <figure v-for="image in about.images" :key="image.src" class="col xs-col-12 md-col-4">
                <img :src="image.src" />
                <figcaption class>{{ image.alt }}</figcaption>
              </figure>
            </div>
          </section>-->

          <!-- <section class="xs-py2">
            <img
              src="https://generative-placeholders.glitch.me/image?width=1200&height=400&colors=61&style=cubic-disarray"
            />
          </section>-->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "About",
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    about() {
      return this.$store.state.about;
    },
  },
};
</script>
