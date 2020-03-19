<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:null
        }
    },
    created(){
        this.getswipedata();
    },
    methods:{
        getswipedata() {
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
                if(result.body.status===0){
                    this.list = result.body.message;
                }
            })
        }
    }
}
</script>

<style  scoped>
    .mint-swipe{
        height: 200px;
        color: wheat;
    }
    .mint-swipe-item img{
        height: 100%;
        width: 100%;
    }  
</style>