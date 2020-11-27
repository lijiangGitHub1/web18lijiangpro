<template>
    <div class="div_box">
        <header>
            <div class="lunbo">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../../../src/assets/img/doupo.png"></van-swipe-item>
             <van-swipe-item><img src="../../../src/assets/img/douluo.jpg"></van-swipe-item>
            </van-swipe>
            </div>
            <div class="div_top">
                <ul class="ul_top">
                <li class="active">精选</li>
                <li>女生</li>
                <li>男生</li>
                </ul>
                <div class="div_sear">
                    <van-icon class="search" name="search" size="24" color="white"/>
                </div>
            </div>
        </header>
        <section>
            <div class="tutu">
                <img src="../../../src/assets/img/1.png">
                <img src="../../../src/assets/img/2.png">
            </div>
            <div class="div_content">
                <div class="div_text">
                    <h2>爆款必看</h2>
                    <h3>更多<van-icon name="arrow" color="yellow" style="font-weight:900;"/></h3>
                </div>
                <ul class="ul_shu">
                    <div class="shu"><li><img src="../../../src/assets/img/shu1.png"><h5>我爱你遥不</h5><span>有仙气少女</span></li>
                    <li><img src="../../../src/assets/img/shu2.png"><h5>腹黑</h5><span>舞清扬</span></li>
                    <li><img src="../../../src/assets/img/shu3.png"><h5>孕妇有约</h5><span>菲小童</span></li>
                    <li><img src="../../../src/assets/img/shu4.png"><h5>神女狂妃</h5><span>红尘雪</span></li></div>
                     <div class="shu"><li><img src="../../../src/assets/img/shu5.png"><h5>护花狂兵</h5><span>熏儿MM</span></li>
                    <li><img src="../../../src/assets/img/shu6.png"><h5>亡妃归来:</h5><span>芳小汐</span></li>
                    <li><img src="../../../src/assets/img/shu7.png"><h5>限时婚约:</h5><span>温菁</span></li>
                    <li><img src="../../../src/assets/img/shu8.png"><h5>拒嫁豪门:</h5><span>七镇</span></li></div>
                </ul>
            </div>
        </section>
    </div>
</template>
<style scoped>
.shu{
    margin-bottom: 10px;
}
.ul_shu li img{
    width: 100%;
}
.ul_shu span{
    font-size: 12px;
}
.ul_shu h5{
    font-weight: 600;
    margin:2px 0;
}
.ul_shu li:nth-of-type(5){
    margin-left: 0!important;
    
}
.ul_shu li:not(:first-child){
    margin-left: 6.6%;
}
.ul_shu li{
    display: inline-block;
    width: 20%;
}
.div_text{
    height: 80px;
}
.div_text h2{
    float: left;
}
.div_text h3{
    float: right;
    font-weight: 500;
}
.div_content{
    padding:20px;
}
.tutu img{
    width: 22%;
    padding: 0 14%;
}
.tutu{
    margin: 20px 0;
}
section{
    background: white;
}
.div_sear{
    position: absolute;
    top:0px;
    left: 190px;
    border-radius: 50%;
    background: #797a7c;
    width: 30px;
    height: 30px;
}
.lunbo img{
    width: 100%;
}
/* header{
    background: url('../../../src/assets/img/doupo.jpg')no-repeat;
    height: 260px;
    width: 100%;
    background-size: 100%;
} */
.search{
    padding-left: 4px;
    padding-top: 3px;
}
.div_top{
    position: absolute;
    top: 40px;
    left: 30%;
}
.active{
    background: #ffd101;
    color:black!important;
}
.ul_top{
    width: 144px;
    margin: 0 auto;
    background: #797a7c;
    border-radius: 20px;
}
.ul_top li{
    font-size: 14px;
    display: inline-block;
    color: white;
    padding: 6px 10px;
    border-radius: 20px;
    text-align: center;
}
</style>