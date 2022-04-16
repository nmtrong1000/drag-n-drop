<template>
  <el-form :model="configForm">
    <el-form-item label="Text">
      <el-input v-model="configForm.props.content" />
    </el-form-item>
    <template v-if="configForm.props.style">
      <el-form-item
        label="Foreground"
      >
        <el-color-picker v-model="configForm.props.style.color" />
      </el-form-item>
      <el-form-item
        label="Background"
      >
        <el-color-picker v-model="configForm.props.style.backgroundColor" />
      </el-form-item>
      <el-form-item
        label="Border"
      >
        <el-color-picker v-model="configForm.props.style.borderColor" />
      </el-form-item>
    </template>
    <template v-if="configForm.props.extensions">
      <el-form-item
        label="Alert Message"
      >
        <el-input v-model="configForm.props.extensions.actionMsg" />
      </el-form-item>
      <el-form-item
        label="Position"
      >
        <el-radio
          label="left"
          v-model="configForm.props.extensions.position"
        >
          Left
        </el-radio>
        <el-radio
          label="center"
          v-model="configForm.props.extensions.position"
        >
          Center
        </el-radio>
        <el-radio
          label="right"
          v-model="configForm.props.extensions.position"
        >
          Right
        </el-radio>
      </el-form-item>
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