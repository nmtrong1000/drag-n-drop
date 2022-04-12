<template>
  <main>
    <div>
      <router-link :to="{ name: 'admin' }">
        <el-button>Back</el-button>
      </router-link>
    </div>
    <el-divider />
    <div
      v-for="e in elements"
      :key="e.id"
    >
      <component
        :is="getBaseComponent(e.component)"
        :config="e"
      />
    </div>
  </main>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTemplateStore } from 'src/store/template'

const templateStore = useTemplateStore()
const {registered, elements } = storeToRefs(templateStore)

const getBaseComponent = ( id: string ) => {
  const selected = registered.value.find(c => c.id === id)
  return selected ? selected.component.base: null
}
</script>
<style lang="scss" src="./style.scss" />