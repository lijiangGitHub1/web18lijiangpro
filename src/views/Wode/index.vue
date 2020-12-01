<template>
  <div>
    <van-row gutter="20">
      <van-col span="24" class="tutu">
        <img src="../../../src/assets/img/lg2.png" @click="showPopup"/>
        <span class="lg" @click="showPopup">登录</span>
      </van-col>
      <van-col span="24">
        <ul>
          <li>
            <van-icon name="todo-list" color="yellow" size="30" />
            <span>最近浏览</span>
            <van-icon name="arrow" />
          </li>
          <li>
            <van-icon name="column" color="yellow" size="30" />
            <span>帮助反馈</span>
            <van-icon name="arrow" />
          </li>
          <li>
            <van-icon name="setting" color="yellow" size="30" />
            <span>设置</span>
            <van-icon name="arrow" />
          </li>
        </ul>
      </van-col>
      <van-col span="24">
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '48%' }">
                        <div class="user" :class="{active2:flag}">
                            <span :class="{active:flag}">账号</span><input type="text" v-model="user" placeholder="默认 admin" @focus="in_focus(0)" @blur="in_blur(0)">
                        </div>
                        <div class="pwd" :class="{active2:flag1}">
                            <span :class="{active:flag1}">密码</span><input type="password" v-model="pwd" placeholder="默认 123456" @focus="in_focus(1)" @blur="in_blur(1)">
                        </div>
                        <div class="but" :plain="true">
                             <van-button  type="default" class="but2">登录</van-button>
                        </div>
        </van-popup>
      </van-col>
    </van-row>
    <footer>
      <Tabbar></Tabbar>
    </footer>
  </div>
</template>
<script>
import Tabbar from "../../components/Tabbar";
export default {
  data() {
    return {
      show: false,
      flag:false,
      flag1:false,
      user:'',
      pwd:''
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    in_focus(num){
            if(num==0){
            this.flag=true;
            }else if(num==1){
            this.flag1=true;
            }
        },
        in_blur(num){
            if(num==0){
            this.flag=false;
            }else if(num==1){
            this.flag1=false;
            }
        }
  },
  components: {
    Tabbar
  }
};
</script>
<style scoped>
 .but{
    cursor: pointer;
    width: 376px;
    background-color: rgba(45, 169, 250, 1);
    border: none;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 50px;
    height: 60px;
    text-align: center;
    }
    .but2{
        border: none;
        outline: none;
        text-align: center;
        background: transparent;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        position: absolute;
        bottom: 46px;
        left: 182px;
    }
    .but2:focus{
        background: rgb(45,169,250);
    }
  .user{
        width: 376px;
        margin-left: 20px;
        margin-top: 120px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
    }
    .user input{
        width: 200px;
        margin-left: 45px;
        height: 40px;
        border:none;
        outline: none;
        position: absolute;
        top: 70px;

    }
    .user span{
        position: absolute;
        left: 20px;
        top: 80px;
        color: #666666;
        font-size: 14px;
    }
    .pwd{
        width: 376px;
        margin-left: 20px;
        margin-top: 78px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
    }
    .pwd input{
        width: 200px;
        margin-left: 45px;
        height: 40px;
        border:none;
        outline: none;
        position: absolute;
        top: 150px;

    }
    .pwd span{
        position: absolute;
        left: 20px;
        top: 160px;
        color: #666666;
        font-size: 14px;
    }
       .user span{
        position: absolute;
        left: 20px;
        top: 80px;
        color: #666666;
        font-size: 14px;
    }
    .active{
        color: rgb(45,169,250)!important;
    }
    .active2{
        border-color: rgba(45, 169, 250, 1)!important;
       
    }
ul li:last-child i:last-child {
  left: 256px;
}
ul li i:last-child {
  top: 2px;
  left: 220px;
}
ul li i {
  top: 8px;
}
ul li span {
  padding-left: 10px;
}

ul li {
  position: relative;
  text-indent: 10px;
  font-size: 18px;
  line-height: 80px;
  border-bottom: 1px solid #e5e5e5;
}
.lg {
  float: left;
  color: white;
  font-size: 20px;
  margin-top: 110px;
  margin-left: 20px;
}
.tutu img {
  float: left;
  width: 24%;
  margin-top: 90px;
  margin-left: 30px;
}
.tutu {
  background: url("../../../src/assets/img/lg1.png") no-repeat;
  height: 300px;
  background-size: 100%;
}
</style>