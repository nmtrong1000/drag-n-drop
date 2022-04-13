<template>
  <el-container class="p-consumer">
    <el-header class="p-consumer__header">
      <router-link :to="{ name: 'admin' }">
        <el-button :icon="Back">
          Back
        </el-button>
      </router-link>
    </el-header>
    <el-main>
      <component
        :config="e"
        v-for="e in elements"
        :key="e.id"
        :is="getBaseComponent(e.component)"
      />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { Back } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useTemplateStore } from 'src/store/template'

const templateStore = useTemplateStore()
const {registered, elements } = storeToRefs( templateStore )
const getBaseComponent = ( id: string ) => {
  const selected = registered.value.find( c => c.id === id )

  return selected ? selected.component.base: null
}
</script>
<style lang="scss" src="./style.scss" />