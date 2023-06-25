<template>
  <HelloWorld 
  :name="prod.Name" 
  :elements="prod.Elements" 
  :depht="0"/>
  <!-- <catalog/> -->
</template>

<script>
import products from "./products.json"
import HelloWorld from './components/HelloWorld.vue'
import catalog from "./components/catalog.vue"

export default{
  data(){
    return {
      prod: products
    }
  },
  components:{
    HelloWorld,
    catalog
  },
}
</script>

<style scoped>

</style>
