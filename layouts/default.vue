<template>
  <div>
    <app-header></app-header>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue'
import AppFooter from '~/components/common/AppFooter.vue'

export default {
  name: 'default',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
</style>
