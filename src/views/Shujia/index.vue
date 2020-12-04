<template>
  <div>
    <van-col span="24" class="tutu" :style="imgArray">
            <van-pull-refresh
            class="shuaxin"
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
</van-pull-refresh>
      <div class="shezhi">
  
        <van-uploader :after-read="afterRead">
          <van-icon name="ellipsis" size="30" color="white" title="更换背景图片" />
        </van-uploader>
      </div>
    </van-col>
    <van-col span="20" offset="2">
      <div class="content">
        <img src="../../../src/assets/img/jia1.png" />
        <p>
          本周已读
          <span>120</span>分钟
        </p>
      </div>
    </van-col>
    <van-col span="22" offset="1">
      <div class="gaofen">
        <div>
          <img src="../../../src/assets/img/jia2.png" />
          <h5>青丘绵绵无恨期</h5>
          <span>余浅·44章未读</span>
          <span>完本</span>
        </div>
      </div>
    </van-col>
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
      count: 0,
      isLoading: false,
      imgArray:{
        backgroundImage:'url(' + require('../../../src/assets/img/lg1.png') + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'
      }
    };
  },
  components: {
    Tabbar
  },
  methods: {
     onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file.file.name);
      if(file.file.name=="lg1.png"){
          this.imgArray.backgroundImage='url(' + require('../../../src/assets/img/lg1.png') + ')';
      }else if(file.file.name=="22.png"){
          this.imgArray.backgroundImage='url(' + require('../../../src/assets/img/22.png') + ')';
      }else if(file.file.name=="33.png"){
          this.imgArray.backgroundImage='url(' + require('../../../src/assets/img/33.png') + ')';
      }else if(file.file.name=="44.png"){
          this.imgArray.backgroundImage='url(' + require('../../../src/assets/img/44.png') + ')';
      }
    }
  }
};
</script>
<style scoped>
.shuaxin{
height:110px;width:100%;
position:absolute;
color: black;
}
.gaofen span:last-child {
  margin-top: 16px;
  color: #999999;
}
.gaofen h5 {
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 16px;
}
.gaofen h5,
.gaofen span {
  width: 50%;
  float: left;
  text-indent: 1rem;
}
.gaofen div:nth-of-type(2) img,
.gaofen div:nth-of-type(4) img {
  padding-left: 8%;
}
.gaofen img {
  float: left;
  width: 24%;
}
.gaofen {
  height: 220px;
}
.gaofen div {
  width: 100%;
  float: left;
}
.content span {
  color: #ffb00c;
  padding: 0 2px;
}
.content p {
  float: right;
  color: #5f5f5f;
  font-size: 20px;
  margin-right: 70px;
}
.content img {
  width: 25%;
}
.content {
  position: relative;
  top: -40px;
  padding: 10px;
  border: 1px solid #cacaca;
  box-shadow: 0 10px 12px #cacaca;
  border-radius: 10px;
  z-index: 666;
  background: white;
}
.shezhi {
  float: right;
  margin-top: 40px;
  margin-right: 30px;
}
.tutu {
  /* background: url("../../../src/assets/img/lg1.png") no-repeat; */
  height: 150px;
  background-size: 100%;
}
</style>