<template>
  <div >
    <div :style="indient" @click="categoryClick" class="store">{{ name }}</div>
  </div>
  <div>
    <div v-if="opened">
      <HelloWorld
      v-for="el in elements" 
      :elements="el.Elements" 
      :name="el.Name"
      :depht="depht+1"
      />
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        opened: false
      }
    },
    props: [ 'name', 'elements', 'depht' ],
    name: 'HelloWorld',
    methods:{
      categoryClick(){
        this.opened = !this.opened
      }
    },
    computed: {
      indient() {
        return this.elements ? { 
            transform: `translate(${this.depht * 50}px)`,
            cursor: 'pointer'
          } : {
            transform: `translate(${this.depht * 50}px)`,
            cursor: 'default'
          }
      }
    }
  }
</script>

<style>

</style>
