<template>
  <sidebar
    width="60vw"
    :active="uiStore.sidebar.select"
    title="Select Template"
    @close="uiStore.reset"
  >
    <draggable
      :icon="part.icon"
      v-for="(part, idx) in templateParts"
      :key="idx"
      @click="handleClick(part)"
    >
      {{ part.title }}
    </draggable>
  </sidebar>
</template>
<script lang="ts" setup>
import { templateParts } from 'src/config'
import { useUIStore } from 'src/store/ui'
import { useTemplateStore } from 'src/store/template'

const uiStore = useUIStore()
const templateStore = useTemplateStore()
const handleClick = ( part ) => {
  templateStore.insert( part )
  uiStore.reset()
}
</script>
<style lang="scss" src="../style.scss" />