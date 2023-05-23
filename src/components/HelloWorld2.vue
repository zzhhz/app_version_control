
<script setup lang="ts">
import BodyContent from "./body/BodyContent.vue";
import HeadContent from "./head/HeadContent.vue";
import CateContent from "./left/CateContent.vue";
import MainIndex from "./main/MainIndex.vue";

defineProps<{ msg: string, components: { BodyContent, HeadContent, CateContent, MainIndex } }>();

</script>
<template>
  <div class="all">
    <HeadContent/>
    <BodyContent/>
    <CateContent/>
    <MainIndex/>
  </div>
</template>



<style scoped>
.all {
  flex: auto;
}

</style>
