<template>
  <div>
    <div>
      <form>
        <label><input name="device_platform" type="radio" value="Android"/> Android <svg-icon icon-class="android" /> </label>
        <label><input name="device_platform" type="radio" value="iOS"/>
<!--          <svg-icon icon-class="iOS" />-->
          <iosSvg width="60" height="60" color="#00ff00"></iosSvg>
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
import iosSvg from '@/components/svg/iosSvg'
import SvgIcon from "@/SvgIcon";
export default {
  name: "HeadContent",
  components: {SvgIcon,iosSvg},
  props: {
    tableLabel: {}
  },
  data(){
    return {
      iosSvg: iosSvg
    }
  }
}
</script>

<style scoped>

</style>