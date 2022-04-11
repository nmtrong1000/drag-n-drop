<template>
  <p :style="style" v-html="content" />
</template>
<script lang="ts" setup>
import type { TemplateProps } from 'src/store/template/types'
defineProps<TemplateProps>()
</script>
<style lang="scss" src="./style.scss" scoped />