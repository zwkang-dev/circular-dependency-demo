<script lang="ts" setup>
import { defineEmits, defineProps, toRefs } from 'vue';
import { useAnother } from './useAnother';
</script>

<template>
  <div>
    Dependss
    <button @click="useAnother">click</button>
    <!-- <Another /> -->
  </div>
</template>

<style lang="scss" scoped>

</style>
