<template>
  <div class="top-menu">
    <div
        @click="switchCom(item,index)"
        :class="[bColor === index? 'active' : '']"
        class="top-menu-card"
        v-for="(item,index) in dataCom" :key="index">
      <div> {{ item.name }}</div>
    </div>
  </div>
  <component :is="comId" :key="comId"></component>
</template>

<script>

import SvgIcon from "@/SvgIcon/index.vue";
import {ref,reactive,markRaw,shallowRef} from 'vue'
import GuardShell from "@/components/protecter/guard-shell.vue";
import JsonFormat from "@/components/json/json-format.vue";
export default {
  name: "HeadContent",
  components: {SvgIcon, GuardShell, JsonFormat},
  props: {
    tableLabel: {}
  },
  data(){
    return {
      comId:shallowRef(JsonFormat),
      bColor:ref(0),
      dataCom:reactive([
        {
          name:'JSON',
          com:markRaw(JsonFormat)
        },{
          name:'加固',
          com:markRaw(GuardShell)
        }
      ])
    }
  },
  methods:{
    switchCom(item, index){
      this.comId = item.com
      this.bColor = index
    }
  }
}
</script>

<style scoped lang="less">
.active{
  background-color: #339933;
  color: white;
}
.top-menu{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  &-card{
    border: 1px solid #ccc;
    padding: 0.1rem 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
}
</style>