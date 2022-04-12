<template>
  <main class="p-admin">
    <header class="p-admin__header">
      <el-row justify="end" :gutter="10">
        <el-col
          v-for="(item, idx) in menu"
          :key="idx"
          :span="24 / menu.length"
          :xs="{ span: 24 / menu.length * 2 }"
        >
          <el-button
            :type="item.type"
            :icon="item.icon"
            @click="menuActions[item.id]"
            plain
          >
            {{ item.title }}
          </el-button>
        </el-col>
      </el-row>
    </header>
    <el-row
      class="p-admin__inner"
      :gutter="0"
    >
      <el-col :span="5">
        <nav>
          <draggable
            v-for="(part, idx) in templateConfig"
            :key="idx"
            :icon="part.icon"
          >
            {{ part.title }}
          </draggable>
        </nav>
      </el-col>
      <el-col :span="19">
        <section class="p-admin__droppable">
          <drop-content
            v-for="element in templateStore.elements"
            :key="element.id"
            :config="element"
          />
        </section>
        <footer>
          <p>Mouse: (0, 7)</p>
          <p>Dragging: Button</p>
          <p>Instances: {{ templateStore.elements.length }}</p>
          <p>Config: {{ JSON.stringify(templateStore.elements[0]) }}</p>
        </footer>
      </el-col>
    </el-row>
    <admin-editor />
  </main>
</template>
<script lang="ts" setup>
import AdminEditor from './components/Editor/index.vue'
import { menu } from './mocks/menu'
import { templateConfig } from 'src/store/template/config'
import { useRouter } from 'vue-router'
import { useUIStore } from 'src/store/ui'
import { useTemplateStore } from 'src/store/template'

const router = useRouter()
const uiStore = useUIStore()
const templateStore = useTemplateStore()

const menuActions = {
  'action-save': () => {
    uiStore.toggleLoading('test')
    setTimeout(() => {
      uiStore.toggleLoading()
    }, 4000)
  },
  'action-undo': () => {
    console.log('undo')
  },
  'action-redo': () => {
    console.log('redo')
  },
  'action-export': () => {
    console.log('import')
  },
  'action-import': () => {
    console.log('export')
  },
  'action-view': () => {
    router.push({ name: 'consumer' })
  }
}
</script>
<style lang="scss" src="./style.scss" />