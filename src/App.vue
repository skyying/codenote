<template>
  <div id="app">
    <h1>Code note</h1>
    <Nav v-bind:links="links"/>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "app",
  components: {
    Nav
  },
  data() {
    return {
      links: [{ id: 0, text: "this may be a magic" }, { id: 1, text: "link2" }]
    };
  }
};
</script>

<style>
</style>
