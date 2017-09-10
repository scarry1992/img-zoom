<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  created () {
    this.$store.dispatch('getBlocks')
  }
}
</script>

<style></style>
