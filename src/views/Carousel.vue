<template>
  <section class="carousel">
    <transition name="active">
      <div
        class="carousel__main"
        :key="images[active].id"
        v-show="active === images[active].id"
      >
        <img :src="images[active].img" />
      </div>
    </transition>
    <div @click="prev" class="carousel__prev">
      <font-awesome-icon icon="angle-left" size="4x" />
    </div>
    <div @click="next" class="carousel__next">
      <font-awesome-icon icon="angle-right" size="4x" />
    </div>
    <ul class="carousel__thumbnails">
      <li
        v-for="image in images"
        :key="image.id"
        :class="{ current: active === image.id }"
        @click="current(image.id)"
      >
        <img :src="image.img" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";

export default defineComponent({
  setup() {
    const active = ref(0);
    const images = reactive([
      { id: 0, img: require("@/assets/carousel/image000.jpg") },
      { id: 1, img: require("@/assets/carousel/image001.jpg") },
      { id: 2, img: require("@/assets/carousel/image002.jpg") },
      { id: 3, img: require("@/assets/carousel/image003.jpg") },
      { id: 4, img: require("@/assets/carousel/image004.jpg") },
      { id: 5, img: require("@/assets/carousel/image005.jpg") },
      { id: 6, img: require("@/assets/carousel/image006.jpg") },
    ]);
    const current = (id: number) => (active.value = id);
    const prev = () =>
      active.value <= 0 ? (active.value = images.length - 1) : active.value--;
    const next = () =>
      active.value >= images.length - 1 ? (active.value = 0) : active.value++;

    onMounted(() => {
      setInterval(() => next(), 4000);
    });

    return {
      active,
      images,
      current,
      prev,
      next,
    };
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  width: 840px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  &__main {
    width: 640px;
    height: 400px;
    margin: 0 auto;
  }
  &__prev {
    position: absolute;
    top: 150px;
    left: 20px;
    cursor: pointer;
    color: lightgray;
    &:hover {
      transition-duration: 0.2s;
      transform: translateX(-10px);
    }
  }
  &__next {
    position: absolute;
    top: 150px;
    right: 20px;
    cursor: pointer;
    color: lightgray;
    &:hover {
      transition-duration: 0.2s;
      transform: translateX(10px);
    }
  }
  &__thumbnails {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    & li {
      cursor: pointer;
      opacity: 0.4;
      &:hover {
        opacity: 1;
      }
      &.current {
        opacity: 1;
      }
    }
    & img {
      width: 80px;
    }
  }
}

.active {
  &-enter {
    &-from {
      opacity: 0;
    }
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 1s;
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
      transition: opacity 0s;
    }
  }
}
</style>
