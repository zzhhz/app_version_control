<template>
  <div>
    <div>
      <form>
        <label><input name="device_platform" type="radio" value="Android"/> Android </label>
        <label><input name="device_platform" type="radio" value="iOS"/>
<!--          <svg-icon icon-class="iOS"/>-->
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
import SvgIcon from "@/components/SvgIcon";

export default {
  name: "HeadContent",
  components: {SvgIcon},
  props: {
    tableLabel: {}
  }
}
</script>

<style scoped>

</style>