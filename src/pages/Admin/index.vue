<template>
  <main class="p-admin">
    <header class="p-admin__header">
      <el-row
        justify="end"
        :gutter="10"
      >
        <el-col
          :span="24 / menu.length"
          :xs="{ span: 24 / menu.length * 2 }"
          v-for="(item, idx) in menu"
          :key="idx"
        >
          <el-upload
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :multiple="false"
            :on-change="menuActions[item.id]"
            v-if="item.id == 'action-import'"
          >
            <el-button
              :type="item.type"
              :icon="item.icon"
              plain
              @click="(e) => { e.preventDefault() }"
            >
              {{ item.title }}
            </el-button>
          </el-upload>
          <el-button
            :type="item.type"
            :icon="item.icon"
            plain
            v-else
            @click="menuActions[item.id]"
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
      <el-col
        :span="5"
        class="hidden-xs-only"
      >
        <nav>
          <draggable
            :icon="part.icon"
            v-for="(part, idx) in templateConfig"
            :key="idx"
            @mousedown="(e) => handleDragging(e, part)"
            @dragstart="handleDragStart"
          >
            {{ part.title }}
          </draggable>
        </nav>
      </el-col>
      <el-col
        :span="19"
        :xs="{ span: 24 }"
      >
        <section
          class="p-admin__droppable"
          ref="droppable"
          @mousemove="setPointerCoord"
        >
          <drop-content
            :config="element"
            v-for="element in templateStore.elements"
            :key="element.id"
          />
          <el-row
            class="hidden-sm-and-up"
            justify="center"
          >
            <el-button
              type="primary"
              plain
              :icon="Plus"
              @click="uiStore.toggleSidebar('select')"
            >
              Add new template
            </el-button>
          </el-row>
        </section>
        <admin-report
          :coordinate="pointerCoord"
        />
      </el-col>
    </el-row>
    <template-select />
    <admin-editor />
  </main>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { exportToFile, extractData } from 'src/helpers'
import { useUIStore } from 'src/store/ui'
import { templateConfig } from 'src/store/template/config'
import { useTemplateStore } from 'src/store/template'
import type { TemplatePart } from 'src/store/template/types'
import { menu } from './mocks/menu'
import AdminEditor from './sections/Editor.vue'
import AdminReport from './sections/Report.vue'
import TemplateSelect from './sections/Select.vue'

const router = useRouter()
const uiStore = useUIStore()
const templateStore = useTemplateStore()
const droppable = ref( null )
const menuActions = {
  'action-save': () => {
    templateStore.save()
  },
  'action-undo': () => {
    templateStore.undo()
  },
  'action-redo': () => {
    templateStore.redo()
  },
  'action-export': () => {
    exportToFile( `${Date.now()}-template.json`, JSON.stringify( templateStore.elements, null, 2 ) )
  },
  'action-import': ( file ) => {
    if( file.name && file.size > 0 && file.name.endsWith( '.json' ) ) {
      extractData( file.raw, templateStore.importTemplate, ( err ) => {
        throw err
      } )
    }
  },
  'action-view': () => {
    templateStore.resetFields()
    router.push( { name: 'consumer' } )
  }
}
/* Log coordinate */
const pointerCoord = ref( [0,0] )
const setPointerCoord = ( e ) => {
  pointerCoord.value = [e.x, e.y]
}

const dropBounding = computed( () => {
  if( droppable.value ) {
    return ( droppable.value as HTMLElement ).getBoundingClientRect()
  }

  return null
} )
/* Dragging */
const handleDragging = ( e: MouseEvent, part: TemplatePart ) => {
  /**
   * To drag a template part into droppable zone, then proceed template insertion
   */
  if( !e.target ) return
  const target = e.target as HTMLElement,
    bounding = target.getBoundingClientRect()
  const shiftX = e.clientX - bounding.left,
    shiftY = e.clientY - bounding.top

  target.style.position = 'fixed'
  target.style.zIndex = '1000'
  target.style.width = `${bounding.width}px`
  target.style.height = `${bounding.height}px`

  function inDropArea( pageX: number, pageY: number ) {
    /* To specify whether the dragging element is in droppable zone */
    if( dropBounding.value ) {
      const { x, y, width, height } = dropBounding.value

      return pageX >= x && pageX <= x + width && pageY >= y && pageY <= y + height
    }

    return false
  }

  function moveAt( pageX: number, pageY: number ) {
    /* To directly move the target following the cursor */
    target.style.left = `${pageX - shiftX}px`
    target.style.top = `${pageY - shiftY}px`

    /* Log coordinate */
    pointerCoord.value = [pageX, pageY]
  }

  moveAt( e.pageX, e.pageY )
  function onMouseMove( e: MouseEvent ) {
    moveAt( e.pageX, e.pageY )

    /* To toggle overlay in droppable zone */
    if( !droppable.value ) return
    if( inDropArea( e.pageX, e.pageY ) ) {
      ( droppable.value as HTMLElement ).classList.add( 'active' )
    } else {
      ( droppable.value as HTMLElement ).classList.remove( 'active' )
    }
  }

  document.addEventListener( 'mousemove', onMouseMove )
  target.onmouseup = ( e ) => {
    document.removeEventListener( 'mousemove', onMouseMove )

    /* Reset stylesheet */
    target.style.width = ''
    target.style.height = ''
    target.style.position = ''
    target.style.zIndex = ''
    target.onmouseup = null

    if( !droppable.value ) return
    ( droppable.value as HTMLElement ).classList.remove( 'active' )

    /* Proceed template insertion */
    if( inDropArea( e.pageX, e.pageY ) ) {
      templateStore.insert( part )
    }
  }
}

const handleDragStart = () => {
  /* To prevent conflict with default drag'n'drop support */
  return false
}
</script>
<style lang="scss" src="./style.scss" />