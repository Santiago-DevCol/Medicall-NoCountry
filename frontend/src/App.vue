<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => !title ? 'Medicall' : `${title} | Medicall`
})
</script>
<template>
  <DefaultLayout />
  <RouterView />
</template>
<style scoped>
#app {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
