
<script setup lang="ts">
import BodyContent from "./body/BodyContent.vue";
import HeadContent from "./head/HeadContent.vue";

defineProps<{ msg: string, components: { BodyContent, HeadContent } }>();

</script>
<template>
  <div class="all">
    <HeadContent/>
    <BodyContent/>
  </div>
</template>



<style scoped>
.all {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  float: left;
}

</style>
