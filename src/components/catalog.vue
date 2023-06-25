<!-- <template>
    <div>
        <button @click="log()">log</button>
        <div v-for="item in p" :key="item.Name">
            {{ item.Name }}
        </div>
        <div v-for="item in p.c" :key="item.id">
            {{ item }}
        </div>
    </div>
</template> -->

<template>
    <input type="text" v-model="id" />
    <div class="flex">
      <div
        class="item"
        v-for="i in parentCat"
        :key="i.catId"
        @click="setId(i.catId, true)"
      >
        {{ i.cat }}
      </div>
    </div>
    <div class="flex" v-if="bred.lenght != 0">
      <span v-for="i in bred" :key="i" @click="setId(i.id)">{{ i.name }}-></span>
    </div>
    <div class="flex" v-if="isChild">
      <div
        class="item"
        v-for="i in getChild"
        :key="i.cat"
        @click="setId(i.catId)"
      >
        {{ i.cat }}
      </div>
    </div>
  
    <div class="flex" v-if="getProd.lenght != 0">
      <div class="item" v-for="i in getProd" :key="i.catId">
        {{ i.Name }}
      </div>
    </div>
  </template>

<script>
    import products from "../products.json" 
    import {isFolder} from "./111.js"
    // function recursive(arr){
    //     let inFuncArr = arr
    //     //console.log(inFuncArr)
    //     inFuncArr.forEach(element => {
    //         //console.log(element.IsFolder)
    //         if (!("Elements" in element)) {
    //             console.log(inFuncArr)
    //             return inFuncArr
    //         }
    //         inFuncArr = recursive(element.Elements)
    //         //console.log(inFuncArr)
            
    //     });
    // }

    export default {
        data(){
            return{
                prod: products,
                p: [],
                id: "00000000001"
            }
        },
        methods:{
            log(){
                this.p = isFolder(this.prod.Elements, this.id)
            }
        },
        computed: {
            arr() {
            return JSON.parse(this.str);
            },

            cat_t() {
            return isFolder(this.arr.default, null);
            },
            parentCat() {
            return this.cat_t.c.filter((el) => !el.parentId);
            },
            getChild() {
            return this.cat_t.c.filter((el) => el.parentId == this.id);
            },
            getProd() {
            return this.cat_t.a.filter((el) => el.catId == this.id);
            },
            isChild() {
            return this.getChild.length > 0;
            },
            getIdxBred() {
            return this.bred.findIndex((el) => el.id == this.id);
            },
        },
    }
</script>

<style>

</style>