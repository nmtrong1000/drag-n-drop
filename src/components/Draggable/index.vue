<template>
  <div class="c-draggable">
    <component :is="icon" />
    <p>
      <slot></slot>
    </p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  icon: any
}>()
</script>
<style lang="scss" src="./style.scss" scoped />