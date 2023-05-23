<template>
  <div class="main-head">
    <div>
      <form>
        <label><input name="device_platform" type="radio" value="Android"/> Android <svg-icon icon-name="android" /> </label>
        <label><input name="device_platform" type="radio" value="iOS"/>
<!--          <svg-icon icon-class="iOS" />-->
          <svg-icon width="60" height="60" color="#00ff00"  icon-name="iOS"/>
        </label>
      </form>
    </div>
    <div>

    </div>
    <div>

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
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.main-head{
  background: #646cff;
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
}
</style>