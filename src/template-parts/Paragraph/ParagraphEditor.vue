<template>
  <el-form :model="configForm">
    <el-form-item
      label="Color"
      v-if="configForm.props.style"
    >
      <el-color-picker v-model="configForm.props.style.color" />
    </el-form-item>
    <el-form-item
      label="Content"
      style="display: block"
    >
      <div style="width: 100%">
        <quill-editor
          theme="snow"
          :toolbar="[
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'color': [] }, { 'background': [] }]
          ]"
          :content="configForm.props.content"
          content-type="html"
          placeholder="Write something down"
          v-model:content="configForm.props.content"
        />
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { TemplateConfig } from 'src/store/template/types'
import { QuillEditor } from '@vueup/vue-quill'

const props = defineProps<{
  config: TemplateConfig
}>()
const configForm = reactive( {
  ...props.config
} )
</script>
<style lang="scss" src="./style.scss" scoped />