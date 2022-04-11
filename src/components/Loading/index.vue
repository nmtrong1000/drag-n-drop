<template>
  <div
    class="c-loading"
    :class="{
      'c-loading--active': loading
    }"
  >
    <img :src="LoadingIcon" alt="Loading">
    <p>{{ text }}</p>
  </div>
</template>
<script lang="ts" setup>
import LoadingIcon from 'src/assets/img/icon_loading.svg'
defineProps<{
  loading: boolean
  text: string
}>()
</script>
<style lang="scss" src="./style.scss" scoped />