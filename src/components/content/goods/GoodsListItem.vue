<template>
 <div>
   <img :src="goodItem.show.img">
   <div>
     <p>{{goodItem.title}}</p>
     <span class="price">{{goodItem.price}}</span>
     <span class="collect">{{goodItem.cfav}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
