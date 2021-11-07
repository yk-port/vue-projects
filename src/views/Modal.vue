<template>
  <div>
    <button @click="isShow = !isShow">画像を見る</button>

    <transition name="fade">
      <div v-show="isShow">
        <div class="modal__inner">
          <div class="modal__close" @click="isShow = !isShow">
            <fa icon="times" />
          </div>
          <img src="../assets/image001.jpg" />
        </div>
        <div class="modal__background" @click="isShow = !isShow"></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const isShow = ref(false);
    return { isShow };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &__inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    padding: 50px;
    background-color: #fff;
    z-index: 2;
    img {
      width: 100%;
    }
  }
  &__close {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    & i {
      font-size: 20px;
      color: #333;
    }
  }
  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    cursor: pointer;
  }
}

.fade {
  &-enter {
    &-from {
      opacity: 0;
    }
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 0.6s;
    }
  }
  &-leave {
    &-from {
      opacity: 1;
    }
    &-to {
      opacity: 0;
    }
    &-active {
      transition: opacity 0.6s;
    }
  }
}
</style>
