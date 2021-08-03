<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    let theName = ref<number>(123)
    return {
      theName
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
