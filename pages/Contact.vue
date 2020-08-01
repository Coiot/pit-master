<template>
  <main>
    <div class="full-height single xs-border-left xs-border-right">
      <div class="xs-mt4 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <h1 class="xs-py3 main-title">Contact Us</h1>
          <form
            name="contactForm"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            id="contact-form"
            class="contact-form xs-flex xs-flex-column xs-fit xs-mb3"
            netlify
          >
            <p class="form-row">
              <label class="form-label" for="contact-user-name">Name</label>
              <input
                type="text"
                name="name"
                id="contact-user-name"
                class="form-input"
                placeholder="Enter your name"
                required
              />
              <span class="input-focus" aria-hidden="true"></span>
            </p>
            <p class="form-row">
              <label class="form-label" for="contact-user-phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                id="contact-user-phone"
                class="form-input"
                placeholder="Enter your phone number"
                required
              />
              <span class="input-focus" aria-hidden="true"></span>
            </p>
            <p class="form-row">
              <label class="form-label" for="contact-user-email">Email</label>
              <input
                type="email"
                name="email"
                id="contact-user-email"
                class="form-input"
                placeholder="Enter your email address"
              />
              <span class="input-focus" aria-hidden="true"></span>
            </p>
            <p class="form-row">
              <label class="form-label" for="contact-message">Message</label>
              <textarea
                name="message"
                id="contact-message"
                class="form-textarea"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
              <span class="input-focus" aria-hidden="true" required></span>
            </p>
            <input type="hidden" name="form-name" value="contactForm" />
            <p class="form-row form-submit">
              <button type="submit" class="primary button">Send Message</button>
            </p>
          </form>
          <hr />
          <FAQ />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FAQ from "@/components/FAQ.vue";

export default {
  name: "Contact",
  components: {
    FAQ
  }
};
</script>

<style scoped>
input,
textarea {
  width: -webkit-fill-available;
  max-width: 60ch;
}
</style>