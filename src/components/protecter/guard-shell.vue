<template>
  <div>
    <div class="sign-jks-file">
      <button>新增</button>
      <div>
        <select>
          <option v-for="(sub, index) in jksArray" :key="index">
            {{ sub.jksName }}
          </option>
        </select>
      </div>
    </div>
    <form method="post" style="color: white">
      <input  id="select_apk_file" type="file" ref="selectFilePath">
    </form>
    <button @click="clickSubmitBtn">提交</button>
  </div>
</template>
<script>

import {doPost} from "@/http/http";
import constants from "@/http/constants";
import {ref} from "vue";
const selectFilePath = ref()
export default {
  data() {
    return {
      selectValue: 0,
      jksArray:[],
      selectFilePath
    }
  },
  methods: {
    getSelectValue() {
      console.log(this.selectValue);
    },
    clickSubmitBtn() {
      console.log(selectFilePath.value);
    }
  },
  mounted() {
    let params = {"method": "com.zzh.find.jks_all", "page": 0}
    try {
      console.log(constants.jks_path)
      doPost("/JksController", params).then(
          res => {
            this.jksArray = res.data.data;
            console.log("数据响应");
            console.log(res.data);
          }
      );
    } catch (e) {
      console.log("出现异常")
    }
  }
}
</script>
<style scoped>
.sign-jks-file {
  position: absolute;
  display: flex;
  background: white;
}
</style>