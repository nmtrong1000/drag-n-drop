<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, computed, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import { useTemplateStore } from 'src/store/template'
import { templateConfig } from 'src/store/template/config'

const { currentRoute } = useRouter()
const layoutMappings = {
  'default': defineAsyncComponent( () => import( 'src/layouts/Default/index.vue' ) )
}
const layout = computed( () => {

  const { meta } = currentRoute.value

  return layoutMappings[( meta.layout as string ) || 'default']

} )

const templateStore = useTemplateStore()
templateStore.register( templateConfig )
</script>