<template>
  <div class="c-dropcontent">
    <el-row>
      <el-col :span="16">
        <el-tag type="info">{{ config.id }}</el-tag>
      </el-col>
      <el-col :span="8">
        <el-row justify="end">
          <el-button @click="openEditor" type="primary" :icon="Edit" circle size="small" title="Edit" />
          <el-button type="warning" :icon="ArrowUp" circle size="small" title="Move Up" @click="templateStore.moveUp(config)" />
          <el-button type="warning" :icon="ArrowDown" circle size="small" title="Move Down" @click="templateStore.moveDown(config)" />
          <el-button type="danger" :icon="Close" circle size="small" title="Remove" @click="templateStore.remove(config)" />
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <component
      :is="renderedComponent"
      :config="config"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import {
  Edit,
  ArrowDown,
  ArrowUp,
  Close
} from '@element-plus/icons-vue'

import { useTemplateStore } from 'src/store/template'
import type { templateConfig } from 'src/store/template/types'
import { useUIStore } from 'src/store/ui'

const props = defineProps<{
  config: templateConfig
}>()

const templateStore = useTemplateStore()
const uiStore = useUIStore()
const renderedComponent = computed(() => {
  const templatePart = templateStore.registered.find( c => c.id === props.config.component )
  return templatePart ? templatePart.component.base: null
})

const openEditor = () => {
  uiStore.toggleSidebar('template')
  templateStore.$patch({
    editingId: props.config.id
  })
}

onMounted(() => {
  // console.log('config', props.config)
})
</script>
<style lang="scss" src="./style.scss" scoped />