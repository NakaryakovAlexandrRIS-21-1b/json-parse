<template>
  <HelloWorld :name="prod.Name" :elements="prod.Elements" :depht="0"/>
</template>

<script>
import products from "./products.json"
import HelloWorld from './components/HelloWorld.vue'

export default{
  data(){
    return {
      prod: products
    }
  },
  components:{
    HelloWorld
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
