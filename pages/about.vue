<template>
  <main class="clearfix">
    <div class="full-height single xs-border-left xs-border-right">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <h1 class="xs-pt4 main-title">About Us</h1>

          <section class="col xs-col-12 xs-py2">
            <h2 class="xs-py2 main-title">Mission Statement</h2>
            <p>{{ section.mission_statement }}</p>
          </section>

          <section class="col xs-col-12 xs-py2">
            <div class="col xs-col-12 md-col-6">
              <transition appear name="fade">
                <img
                  src="https://generative-placeholders.glitch.me/image?width=500&height=500&colors=61&img=01"
                />
              </transition>
            </div>
            <div class="col xs-col-12 md-col-6">
              <h2 class="xs-py3 main-title">History</h2>
              <p>{{ section.history }}</p>
            </div>
          </section>

          <Team />

          <section class="col xs-col-12 xs-py2">
            <div class="col xs-col-12 md-col-6">
              <img
                src="https://generative-placeholders.glitch.me/image?width=500&height=500&colors=61&img=02"
              />
            </div>
            <div class="col xs-col-12 md-col-6">
              <h2 class="xs-py3 main-title">Process</h2>
              <p>{{ section.process }}</p>
            </div>
            <div class="col xs-col-12 xs-py4 xs-text-center">
              <figure
                v-for="image in section.images"
                :key="image.src"
                class="col xs-col-12 md-col-4"
              >
                <img :src="image.src" />
                <figcaption class>{{ image.alt }}</figcaption>
              </figure>
            </div>
          </section>

          <section class="xs-py2">
            <img
              src="https://generative-placeholders.glitch.me/image?width=1200&height=400&colors=61&style=cubic-disarray"
            />
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Team from "@/components/Team.vue";

export default {
  name: "About",
  components: {
    Team
  },
  data: function() {
    return {
      section: {
        mission_statement: "Text here.",
        history: "Some text.",
        process: "More text.",
        images: [
          {
            src:
              "https://generative-placeholders.glitch.me/image?width=300&height=300&colors=61&style=joy-division&img=01",
            alt: "Process 1"
          },
          {
            src:
              "https://generative-placeholders.glitch.me/image?width=300&height=300&colors=61&style=joy-division&img=02",
            alt: "Process 2"
          },
          {
            src:
              "https://generative-placeholders.glitch.me/image?width=300&height=300&colors=61&style=joy-division&img=03",
            alt: "Process 3"
          }
        ]
      }
    };
  }
};
</script>
