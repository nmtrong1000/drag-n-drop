<template>
  <div
    :style="{
      textAlign: config.props.extensions?.position || ''
    }"
  >
    <button
      :style="config.props.style"
      @click="notifyMessage"
    >
      {{ config.props.content }}
    </button>
  </div>
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