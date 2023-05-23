<script setup lang="ts">
import {ref} from 'vue'
import SvgIcon from './SvgIcon/index.vue'
defineProps<{ msg: string, components: { SvgIcon } }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <svg-icon iconName="android" width="72" height="72" color="#ff0000" />
  <svg-icon iconName="iOS" width="72" height="72" color="#ff0000" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
