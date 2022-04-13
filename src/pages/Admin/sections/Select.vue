<template>
  <sidebar
    width="60vw"
    :active="uiStore.sidebar.select"
    @close="uiStore.reset"
    title="Select Template"
  >
    <draggable
      v-for="(part, idx) in templateConfig"
      :key="idx"
      :icon="part.icon"
      @click="handleClick(part)"
    >
      {{ part.title }}
    </draggable>
  </sidebar>
</template>
<script lang="ts" setup>
import { templateConfig } from 'src/store/template/config'
import { useUIStore } from 'src/store/ui'
import { useTemplateStore } from 'src/store/template'

const uiStore = useUIStore()
const templateStore = useTemplateStore()

const handleClick = (part) => {
  templateStore.insert(part)
  uiStore.reset()
}
</script>
<style lang="scss" src="../style.scss" />