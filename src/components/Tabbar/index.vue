<template>
    <div class="fot">
        <van-tabbar v-model="active" active-color="yellow" inactive-color="#000">
          <van-tabbar-item icon="graphic" replace to="/shujia">书架</van-tabbar-item>
          <van-tabbar-item icon="card" replace to="/index">书城</van-tabbar-item>
          <van-tabbar-item icon="manager" replace to="/wode">我的</van-tabbar-item>
         </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
             active: 1,
        }
    }
}
</script>
<style scoped>
/* .fot{
    height: 50px;
} */
</style>