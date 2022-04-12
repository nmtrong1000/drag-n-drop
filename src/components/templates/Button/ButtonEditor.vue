<template>
  <el-form :model="configForm">
    <el-form-item label="Content">
      <el-input v-model="configForm.props.content" />
    </el-form-item>
    <el-form-item label="Color" v-if="configForm.props.style">
      <el-color-picker v-model="configForm.props.style.color" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { templateConfig } from 'src/store/template/types'

const props = defineProps<{
  config: templateConfig
}>()

const configForm = reactive({
  ...props.config
})
</script>
<style lang="scss" src="./style.scss" scoped />