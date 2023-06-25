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
import * as price from "../assets/1.json";

let a = [];
let c = [];
function isFolder(arr, parentId) {
  if (arr[0].IsFolder) {
    arr.map((el) => {
      c.push({
        cat: el.Name,
        catId: el.Code,
        parentId,
      });
      isFolder(el.Elements, el.Code);
    });
  } else {
    arr.map((el) => {
      a.push({ ...el, catId: parentId });
    });
  }
  return { c, a };
}

function getName(arr, id) {
  let str = "";
  arr.forEach((el) => {
    if (el.catId == id) {
      str = el.cat;
    }
  });
  return str;
}

export default {
  data() {
    return {
      str: JSON.stringify(price),
      id: "00000000001",
      bred: [],
    };
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
  methods: {
    setId(id, parent) {
      this.id = id;
      if (parent) {
        this.bred = [];
        this.bred.push({ id, name: getName(this.cat_t.c, id) });
        return;
      }

      if (this.getIdxBred != -1) {
        this.bred.splice(this.getIdxBred + 1);
        return;
      }
      this.bred.push({ id, name: getName(this.cat_t.c, id) });
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  align-items: center;
}
.item {
  text-align: center;
  margin: 5px;
  background: rgb(241, 241, 241);
  padding: 5px;
}
</style>