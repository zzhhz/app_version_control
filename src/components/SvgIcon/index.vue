<template>
  <svg :class="svgClass" :style="{ width: widthSize + 'px', height: heightSize + 'px', color: currentColor }" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script setup lang='ts'>
import {computed} from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: () => '',
  },
  width: {type: String, default: "48"},        // 图标尺寸
  height: {type: String, default: "48"},        // 图标尺寸
  color: {type: String, default: "#000"},    // 图标颜色
})

const iconName = computed(() => {
  return `#icon-${props.iconName}`
})
const svgClass = computed(() => {
  return props.className ? 'svg-icon ' + props.className : 'svg-icon';
})
const heightSize = computed(() => {
  return props.height;
})
const widthSize = computed(() => {
  return props.width;
})
const currentColor  = computed(()=>{
  return props.color
})


</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
