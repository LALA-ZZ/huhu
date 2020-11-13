<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div>></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommend="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新品','精选']"/>
    <goods-list :goods="goods['pop'].list"/>

    <div>
      <ul>
        <li>hahha</li>
        <li>hahha</li>
        <li>hahha</li>
        <li>hahha</li>
        <li>hahha</li>
      </ul>
    </div>
  </div>



</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";

  import {getHomeMultidata, getHomeGoods} from "network/home";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Home",
    data(){
      return{
        //result: null,//变量result存储请求的数据
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0 , list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components:{
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
    },
    created() {
      //1.请求服务器中的多个数据
      //2.将请求的数据存给data中的result
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      //请求banners，recommend数据
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          // console.log(res) //打印请求的所有数据
          //this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      //请求商品数据
      getHomeGoods(type){
        const  page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          console.log(res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })

      }
    }
  }
</script>

<style scoped>
  #home{

  }

  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
