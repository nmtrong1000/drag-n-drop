<template>
  <button
    :style="config.props.style"
    @click="notifyMessage"
  >
    {{ config.props.content }}
  </button>
</template>
<script lang="ts" setup>
import type { TemplateConfig } from 'src/store/template/types'

const props = defineProps<{
  config: TemplateConfig
}>()
const notifyMessage = () => {
  const { actionMsg } = props.config.props.extensions || {}

  if( actionMsg ) {
    alert( actionMsg )
  }
}
</script>
<style lang="scss" src="./style.scss" scoped />