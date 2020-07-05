<template>
  <section class="col xs-col-12 xs-py2 xs-text-center">
    <figure v-for="member in members" :key="i" class="col xs-col-12 md-col-4 xs-p2">
      <transition appear name="fade">
        <img
          src="https://generative-placeholders.glitch.me/image?width=300&height=300&colors=61&style=tiles"
        />
      </transition>
      <figcaption class="secondary-title">{{ member.name }}</figcaption>
      <p>{{ member.bio }}</p>
    </figure>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      members: [
        {
          name: "Josh",
          bio: "Pit Boss"
        },
        {
          name: "Obed",
          bio: "Head Brusher"
        },
        {
          name: "Isaac",
          bio: "Apprentice Tenderizer"
        }
      ]
    };
  }
};
</script>
