<template>
  <div>
    <!-- Display what you want -->
  </div>
</template>
<script lang="ts" setup>
import type { TemplateConfig } from 'src/store/template/types'

const props = defineProps<{
  config: TemplateConfig
}>()

console.log( 'config', props.config )
</script>