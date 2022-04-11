<template>
  <button :style="style">
    {{ content }}
  </button>
</template>
<script lang="ts" setup>
import type { TemplateProps } from 'src/store/template/types'
defineProps<TemplateProps>()
</script>
<style lang="scss" src="./style.scss" scoped />