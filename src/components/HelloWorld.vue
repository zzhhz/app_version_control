<template>
  <div class="hello">
    <HeadContent/>
    <BodyContent/>
    <CateContent/>
    <MainIndex/>
  </div>
</template>

<script>
import BodyContent from "@/components/body/BodyContent";
import HeadContent from "@/components/head/HeadContent";
import CateContent from "@/components/left/CateContent";
import MainIndex from "@/components/main/MainIndex";


export default {
  name: 'HelloWorld',
  components: {MainIndex, CateContent, HeadContent, BodyContent},
  props: {
    msg: String
  },
  data(){
    return {
    }
  },
  methods: {
    alert: function (event) {
      alert("提示方法")
      if (event) {
        alert(event.target.toString())
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
