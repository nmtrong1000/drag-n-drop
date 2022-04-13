<template>
  <sidebar
    direction="right"
    width="50vw"
    :active="uiStore.sidebar.template"
    @close="uiStore.reset"
    title="Edit Template Part"
  >
    <component
      :is="renderedComponent"
      :config="selectedConfig"
      :key="selectedConfig?.id"
    />
  </sidebar>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUIStore } from 'src/store/ui'
import { useTemplateStore } from 'src/store/template'

const uiStore = useUIStore()
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

const renderedComponent = computed(() => {
  return selected.value ? selected.value.component.editor: null
})

</script>
<style lang="scss" src="./style.scss" />