<template>
  <sidebar
    direction="right"
    width="60vw"
    :active="uiStore.sidebar.edit"
    title="Edit Template Part"
    @close="uiStore.reset"
  >
    <div>
      <span>ID: </span>
      <el-tag type="info">
        {{ selectedConfig?.id }}
      </el-tag>
    </div>
    <el-divider />
    <component
      :config="selectedConfig"
      :key="selectedConfig?.id"
      :is="renderedComponent"
    />
    <template #footer>
      <el-row justify="center">
        <el-button @click="templateStore.save();uiStore.reset()">Save</el-button>
      </el-row>
    </template>
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
const selectedConfig = computed( () => {
  return elements.value.find( c => c.id === editingId.value )
} )
const selected = computed( () => {
  if( selectedConfig.value ) {
    return registered.value.find( c => c.id === selectedConfig.value?.component )
  }

  return null
} )
const renderedComponent = computed( () => {
  return selected.value ? selected.value.component.editor: null
} )
</script>
<style lang="scss" src="../style.scss" />