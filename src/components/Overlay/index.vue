<template>
  <div
    class="c-overlay"
    :class="{
      'c-overlay--active': active
    }"
    @click="emit('close')"
  />
</template>
<script lang="ts" setup>
defineProps<{
  active: boolean
}>()

const emit = defineEmits( {
  close: null
} )
</script>
<style lang="scss" src="./style.scss" scoped />