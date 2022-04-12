<template>
  <footer>
    <p>Mouse: ({{ coordinate[0] }}, {{ coordinate[1] }})</p>
    <p>Instances: {{ templateStore.elements.length }}</p>
    <template v-if="selected">
      <p>Dragging: {{ selected.title }}</p>
    </template>
    <template v-if="selectedConfig">
      <p>Config: {{ JSON.stringify(selectedConfig) }}</p>
    </template>
  </footer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTemplateStore } from 'src/store/template'

defineProps<{
  coordinate: number[]
}>()

const templateStore = useTemplateStore()
const { editingId, registered, elements } = storeToRefs( templateStore )

const selectedConfig = computed(() => {
  return elements.value.find(c => c.id === editingId.value)
})

const selected = computed(() => {
  if( selectedConfig.value ) {
    return registered.value.find( c => c.id === selectedConfig.value?.component )
  }
  return null
})
</script>
<style lang="scss" src="./style.scss" scoped />