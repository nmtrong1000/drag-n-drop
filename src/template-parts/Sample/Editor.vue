<template>
  <el-form :model="configForm">
    <el-form-item label="Text">
      <el-input v-model="configForm.props.content" />
    </el-form-item>
    <template v-if="configForm.props.style">
      <!-- To custom stylesheet -->
    </template>
    <template v-if="configForm.props.extensions">
      <!-- To custom extension attributes -->
    </template>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { TemplateConfig } from 'src/store/template/types'

const props = defineProps<{
  config: TemplateConfig
}>()
const configForm = reactive( {
  ...props.config
} )
</script>