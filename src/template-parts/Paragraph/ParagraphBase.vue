<template>
  <div>
    <p
      :style="config.props.style"
      v-html="config.props.content"
    />
  </div>
</template>
<script lang="ts" setup>
import type { TemplateConfig } from 'src/store/template/types'

defineProps<{
  config: TemplateConfig
}>()
</script>
<style lang="scss" src="./style.scss" scoped />