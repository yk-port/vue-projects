<template>
  <div id="nav">
    <router-link to="/">Top</router-link> |
    <router-link to="/tab">Tab</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/carousel">Carousel</router-link> |
    <router-link to="/nav">Nav</router-link> |
    <router-link to="/search">Search</router-link>
  </div>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul,
li {
  list-style-type: none;
  padding: 0;
}
.fade {
  &-enter {
    &-from {
      transform: translate(-100px, 0);
      opacity: 0;
    }
    &-to {
      opacity: 1;
    }
    &-active {
      transition: all 1s 0s ease;
    }
  }
  &-leave {
    &-from {
      transform: translate(0, 0);
      opacity: 1;
    }
    &-to {
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s 0s ease;
    }
  }
}
</style>
