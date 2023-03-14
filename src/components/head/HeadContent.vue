<template>
  <div>
    <div>
      <form>
        <label><input name="device_platform" type="radio" value="Android"/> Android </label>
        <label><input name="device_platform" type="radio" value="iOS"/>
          <SvgIOS/>
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
import SvgIOS from '../../assets/svg/iOS.svg'

export default {
  name: "HeadContent",
  components: {SvgIOS},
  props: {
    tableLabel: {}
  }
}
</script>

<style scoped>

</style>