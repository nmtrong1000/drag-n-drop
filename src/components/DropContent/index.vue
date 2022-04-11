<template>
  <div class="c-dropcontent">
    <el-row justify="end">
      <el-button @click="openEditor" type="primary" :icon="Edit" circle size="small" title="Edit" />
      <el-button type="warning" :icon="ArrowUp" circle size="small" title="Move Top" />
      <el-button type="warning" :icon="ArrowDown" circle size="small" title="Move Bottom" />
      <el-button type="danger" :icon="Close" circle size="small" title="Remove" />
    </el-row>
    <component
      :is="renderedComponent"
      :content="encodeHTML(config.props.html)"
      :style="config.props.style"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
  Edit,
  ArrowDown,
  ArrowUp,
  Close
} from '@element-plus/icons-vue'

import { encodeHTML } from 'src/helpers'
import { useTemplateStore } from 'src/store/template'
import { useUIStore } from 'src/store/ui'

const props = defineProps<{
  config: {
    id: string
    component: string
    props: {
      html: string
      style?: string
    }
  }
}>()

const templateStore = useTemplateStore()
const uiStore = useUIStore()
const renderedComponent = computed(() => {
  return templateStore.registered[props.config.component]
})

const openEditor = () => {
  uiStore.toggleSidebar('template')
}
</script>
<style lang="scss" src="./style.scss" scoped />