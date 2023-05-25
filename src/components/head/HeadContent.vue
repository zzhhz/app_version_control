<template>
  <div class="main-head">
    <div>
      <form style="background: #0B7500">
        <label><input name="device_platform" type="radio" value="json"/>
          <svg-icon width="30" height="30" color="#c2c2c2" icon-name="json"/>
        </label>
        <label><input name="device_platform" type="radio" value="Android"/>
          <svg-icon icon-name="android" width="30" color="#c2c2c2" height="30"/>
        </label>
        <label><input name="device_platform" type="radio" value="iOS"/>
          <svg-icon width="30" height="30" color="#c2c2c2" icon-name="iOS"/>
        </label>

      </form>
    </div>
  </div>
</template>

<script>

import SvgIcon from '../SvgIcon/index.vue'

export default {
  name: "HeadContent",
  components: {SvgIcon},
  props: {
    tableLabel: {}
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.main-head {
  width: 100%;
  height: auto;
  background: #646cff
}
</style>