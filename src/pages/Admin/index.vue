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
          <el-upload
            action="#"
            v-if="item.id == 'action-import'"
            :auto-upload="false"
            :show-file-list="false"
            :multiple="false"
            :on-change="menuActions[item.id]"
          >
            <el-button
              :type="item.type"
              :icon="item.icon"
              @click="(e) => { e.preventDefault() }"
              plain
            >
              {{ item.title }}
            </el-button>
          </el-upload>
          <el-button
            v-else
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
            @click="templateStore.insert(part)"
          >
            {{ part.title }}
          </draggable>
        </nav>
      </el-col>
      <el-col :span="19">
        <section class="p-admin__droppable" @mousemove="setPointerCoord">
          <drop-content
            v-for="element in templateStore.elements"
            :key="element.id"
            :config="element"
          />
        </section>
        <admin-report
          :coordinate="pointerCoord"
        />
      </el-col>
    </el-row>
    <admin-editor />
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import AdminEditor from './components/Editor/index.vue'
import AdminReport from './components/Report/index.vue'
import { exportToFile, extractData } from 'src/helpers'
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
    templateStore.save()
    console.log('saved')
  },
  'action-undo': () => {
    templateStore.undo()
    console.log('undo')
  },
  'action-redo': () => {
    templateStore.redo()
    console.log('redo')
  },
  'action-export': () => {
    console.log('export')
    exportToFile( `${Date.now()}-template.json`, JSON.stringify(templateStore.elements, null, 2) )
  },
  'action-import': (file) => {
    if( file.name && file.size > 0 && file.name.endsWith('.json') ) {
      extractData(file.raw, templateStore.importTemplate, (err) => { console.log('error', err) })
    }
  },
  'action-view': () => {
    templateStore.resetFields()
    router.push({ name: 'consumer' })
  }
}
const pointerCoord = ref([0,0])
const setPointerCoord = (e) => {
  pointerCoord.value = [e.x, e.y]
}
</script>
<style lang="scss" src="./style.scss" />