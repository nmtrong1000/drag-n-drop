<template>
  <slot />
  <overlay
    :active="uiStore.overlay"
    @close="toggleOverlay"
  />
  <loading
    :loading="uiStore.loading"
    :text="uiStore.loadingText"
  />
</template>
<script lang="ts" setup>
import { useUIStore } from 'src/store/ui'

const uiStore = useUIStore()

const toggleOverlay = () => {
  uiStore.reset()
}
</script>
<style lang="scss" src="./style.scss" />