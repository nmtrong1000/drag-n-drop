<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTemplateStore } from 'src/store/template'
import { templateParts } from 'src/config'

const { currentRoute } = useRouter()
const layoutMappings = {
  'default': defineAsyncComponent( () => import( 'src/layouts/Default/index.vue' ) )
}
const layout = computed( () => {
  const { meta } = currentRoute.value

  return layoutMappings[( meta.layout as string ) || 'default']
} )
const templateStore = useTemplateStore()

templateStore.register( templateParts )

const unsubscribe = templateStore.$onAction( ( { name, store } ) => {
  console.log( 'name', name )
  store.saved = name === 'save'
} )

onMounted( () => {
  templateStore.loadTemplate()
} )

onUnmounted( () => {
  unsubscribe()
} )
</script>