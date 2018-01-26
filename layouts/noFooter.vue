<template>
  <div>
    <app-header></app-header>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue'

export default {
  name: 'default',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
