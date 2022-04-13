<template>
  <aside
    class="c-sidebar"
    :class="{
      'c-sidebar--active': active,
      'c-sidebar--right': direction === 'right'
    }"
    :style="{ maxWidth: width }"
  >
    <div class="c-sidebar__content">
      <header>
        <p v-if="title">
          {{ title }}
        </p>
        <el-button
          circle
          :icon="Close"
          @click="emit('close')"
        />
      </header>
      <div class="c-sidebar__inner">
        <slot />
      </div>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'

withDefaults(
  defineProps<{
    direction: 'left' | 'right'
    width: string
    active: boolean
    title?: string
  }>(), {
    direction: 'left',
    width: '300px'
  }
)

const emit = defineEmits( {
  close: null
} )
</script>
<style lang="scss" src="./style.scss" scoped />