<template>
  <button :style="config.props.style" @click="notifyMessage">
    {{ config.props.content }}
  </button>
</template>
<script lang="ts" setup>
import type { templateConfig } from 'src/store/template/types'
const props = defineProps<{
  config: templateConfig
}>()
const notifyMessage = () => {
  const { actionMsg } = props.config.props.extensions || {}
  if( actionMsg ) {
    alert(actionMsg)
  }
}
</script>
<style lang="scss" src="./style.scss" scoped />