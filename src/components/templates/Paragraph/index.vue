<template>
  <p :style="config.props.style" v-html="config.props.content" />
</template>
<script lang="ts" setup>
import type { templateConfig } from 'src/store/template/types'
defineProps<{
  config: templateConfig
}>()
</script>
<style lang="scss" src="./style.scss" scoped />