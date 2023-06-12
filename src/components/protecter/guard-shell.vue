

<template>
<div>
  <div class="sign-jks-file">
    <button>新增</button>
    <div>
      <select v-model="selectValue">
        <option selected>选中一</option>
        <option>选中二</option>
        <option>选中三</option>
      </select>
    </div>
  </div>
  <form method="post">
    <input type="file" >
  </form>
</div>
</template>
<script>
export default {
  data(){
    return{
      selectValue:'选中二'
    }
  },
  methods:{
    getSelectValue(){
      console.log(this.selectValue)
    }
  }
}
</script>
<style scoped>
.sign-jks-file {
  position:absolute;
  display: flex;
}
</style>