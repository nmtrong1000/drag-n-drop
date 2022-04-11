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
            v-for="(part, idx) in templateParts"
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
            v-for="element in insertedElements"
            :key="element.id"
            :config="element"
          />
        </section>
        <footer>
          <p>Mouse: (0, 7)</p>
          <p>Dragging: Button</p>
          <p>Instances: {{ insertedElements.length }}</p>
          <p>Config: {{ JSON.stringify(insertedElements[0]) }}</p>
        </footer>
      </el-col>
    </el-row>
    <sidebar
      direction="right"
      width="500px"
      :active="uiStore.sidebar.template"
      @close="uiStore.reset"
      title="Edit Template Part"
    >
      <template #footer>
        <el-row justify="center">
          <el-button type="danger" :icon="Delete">Discard</el-button>
          <el-button type="primary" :icon="DocumentChecked">Save</el-button>
        </el-row>
      </template>
    </sidebar>
  </main>
</template>
<script lang="ts" setup>
import {
  Delete,
  DocumentChecked
} from '@element-plus/icons-vue'
import { menu } from './mocks/menu'
import { templateParts } from './mocks/templateParts'
import { useRouter } from 'vue-router'
import { useUIStore } from 'src/store/ui'

const router = useRouter()
const uiStore = useUIStore()

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

const insertedElements = [
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    component: 'paragraph',
    props: {
      html: 'demo',
      style: 'color: red'
    }
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    component: 'button',
    props: {
      html: 'demo',
      style: 'color: red'
    }
  }
]
</script>
<style lang="scss" src="./style.scss" />