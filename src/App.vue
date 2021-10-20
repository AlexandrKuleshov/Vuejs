<template>
  <div id="app">
    <topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    Topbar
  },
}
</script>

