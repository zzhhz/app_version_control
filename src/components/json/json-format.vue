<template>
  <div class="json-container">

    <div class="left-div">
      <textarea class="left-div-text" v-model="jsonRaw" placeholder="json" @input="watchTextChange"/>
    </div>
    <div class="right-div">
      <JsonViewer :value="jsonData" copyable boxed sort theme="jv-dark" v-model="jsonData" class="right-div-text"/>
    </div>

  </div>

</template>
<script>
/*
测试json
{"test":"123","person":{"username":"张三","age":33}, "follow":["篮球","足球"], "edu":[{"eduBefore":"小学","className":"一班级"},{"eduBefore":"小学","className":"一班级"},{"eduBefore":"小学","className":"一班级"}]}
* */
import "vue3-json-viewer/dist/index.css";
import {JsonViewer} from "vue3-json-viewer";
import {getTypeOf} from "@/utils/JsonUtils";

export default {
  props: {},
  setup() {

  },
  components: {
    JsonViewer
  },
  methods: {
    watchTextChange() {
      console.log("监听到数据改变")
      try {
        console.log(this.jsonRaw)
        let s = this.isArrayObj(this.jsonRaw);
        console.log("s: " + s)
        if (s) {
          this.jsonData = JSON.parse(this.jsonRaw)
        }
        //this.jsonData.keys;
      } catch (e) {
        console.log("json解析异常")
      }
      //
    },
    isArrayObj(data) {
      let dataType = this.getTypeOf(data)
      console.log("data type: " + dataType)
      if (dataType === 'array') {
        return 'array'
      } else if (dataType === 'object') {
        return 'object'
      } else if (data.startsWith('{') && data.endsWith('}')) {
        console.log('初步判断为json object')
        return 'object'
      } else if (data.startsWith('[') && data.endsWith(']')) {
        console.log('初步判断为json array')
        return 'array'
      } else {
        return ''
      }

    },
    getTypeOf(data) {
      return getTypeOf(data)
    },
    // 是否是obj的最后一个属性
    isLastOfObj(item, objData) {
      var objKeys = Object.keys(objData)
      return item === objData[objKeys[objKeys.length - 1]]
    },
    // 展开或者收缩
    changeExpand(type) {
      if (type === 'expand') {
        this.isExpand = true
      } else {
        this.isExpand = false
      }
    }
  },
  data() {
    return {
      jsonData: {"error": "json解析错误"},
      jsonRaw: "",
      isExpand: true
    }
  }
}


</script>
<style scoped>
.json-container {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  position: absolute;
  color: black;
  display: flex;
}

.left-div {
  width: 40%;
  border-color: #339933;
  border-width: 1px;
  height: 100%;
}

.left-div-text {
  width: 99%;
  height: 95%;
  background: #42b983;
  color: white;
  font-size: 1rem;
}

.right-div {
  font-size: 20px;
  width: 59%;
  border: 1px solid rgb(58, 56, 53);
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.right-div-text {
  height: 100%;
  width: 100%;
  max-height: 100%;
  text-align: left;
}
.jv-key {
  color: #92278f;

}
.jv-code {
  &-jv-box{
    max-height: 100%;
  }
}
button {
  cursor: pointer;
}
</style>