<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="首页">
        <router-view></router-view>
      </mt-tab-container-item>

      <mt-tab-container-item id="会员">
        <router-view></router-view>
      </mt-tab-container-item>

      <mt-tab-container-item id="购物车">
        <router-view></router-view>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="搜索">
        <router-view></router-view>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="">
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" src="">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:'首页'
    }
  },
  watch:{
    selected(val){
      if(val==='首页'){
        this.$router.replace('/home');
      }
      else if(val==='会员'){
        this.$router.replace('/vip');
      }
      else if(val==='购物车'){
        this.$router.replace('/car');
      }
      else if(val==='搜索'){
        this.$router.replace('/search');
      }
    }
  }
}


</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
