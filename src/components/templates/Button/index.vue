<template>
  <button :style="config.props.style">
    {{ config.props.content }}
  </button>
</template>
<script lang="ts" setup>
import type { templateConfig } from 'src/store/template/types'
defineProps<{
  config: templateConfig
}>()
</script>
<style lang="scss" src="./style.scss" scoped />