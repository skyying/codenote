<template>
  <nav class="nav">
    <div v-for="link in links" v-bind:key="link.id">
      <div>{{link.text}}</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["links"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
