<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :good-item="item" :key="item.title"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components :{
    GoodsListItem
  }
}
</script>

<style scoped>

</style>
