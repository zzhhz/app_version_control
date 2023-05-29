<template>
  <div class="top-menu">
    <form>
      <label><input name="device_platform" type="radio" value="json"/>
        <svg-icon width="30" height="30" color="#c2c2c2" name="json"/>
      </label>
      <label><input name="device_platform" type="radio" value="Android"/>
        <svg-icon name="android" width="30" color="#c2c2c2" height="30"/>
      </label>
      <label><input name="device_platform" type="radio" value="iOS"/>
        <svg-icon width="30" height="30" color="#c2c2c2" name="iOS"/>
      </label>
    </form>
  </div>
</template>

<script>

import SvgIcon from "@/SvgIcon/index.vue";

export default {
  name: "HeadContent",
  components: {SvgIcon},
  props: {
    tableLabel: {}
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.top-menu{
  position: absolute;
  top: 0;
  left: 0;
}
</style>