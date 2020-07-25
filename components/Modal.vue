<template>
  <transition name="modal">
    <div v-if="showModal" class="modal-mask" @click="showModal = false">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h4 class="secondary-title xs-my2">Orders almost filled up!</h4>
          </div>
          <div>
            <p>Only one order slot left for this week. Order fast to secure your spot!</p>
            <button class="modal-default-button xs-my2">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
data() {
    return {
      showModal: true,
    };
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;
}

.modal-container {
  z-index: 9999;
  margin: 0px auto;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>