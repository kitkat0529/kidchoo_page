<template>
<div>
    <div v-if="$mq == 'mobile'">
        <video class="index-intro" controls poster="/index/index-video-preview.jpg"><source src="/index/index-intro.mov"></video>
        <kidchoo-content-only-text title="祈初0-2岁全日制托育" text="祈初全日制托育，为0-2岁宝宝家庭提供<br>全日托、半日托、一对一精致早教、妈妈沙龙<br>育儿测评与咨询等一体式服务<br>早七点半至晚六点半，11个小时超长托育时间"></kidchoo-content-only-text>
        <kidchoo-line />
        <kidchoo-index-class-choice></kidchoo-index-class-choice>
        <kidchoo-line />
        <kidchoo-content-only-img title="医食教合一，祈初特色托育" src="/index/index-pic-1.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="七大分区功能，适龄适性" src="/index/index-pic-2.jpg" text="基于婴幼儿成长特征设置功能分区<br>含动态游戏区、静态游戏区、绘本区<br>角色扮演区、用餐/午睡区、户外游戏区等<br>让宝贝在这些有准备的环境中<br>玩耍、模仿、课程中进行学习"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img class="index-teacher-pic" title="五位老师陪伴，专业教导" src="/index/index-pic-3-new.png" text="依据婴幼儿生长发育各阶段<br>分班照料，严格控制园所照料比例<br>给予宝贝更加专业全面的照顾，培养宝贝良好作息<br>让妈妈稳稳安心"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="四重医护保障，安全呵护" src="/index/index-pic-4.jpg" text="综合日本、台湾的托育健康管理系统<br>引进比利时全套原装进口益生菌空气净化系统<br>医院手术室专用人机同室消毒机等专用设施<br>儿科医师定期诊察<br>保持中心的恒温恒湿，把控每个区域的环境消杀<br>为宝宝健康提供全面保障"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="30种健康食材，个性定制" src="/index/index-pic-5.jpg" text="婴幼儿营养师团队根据<br>宝贝的咀嚼力、体质等情况进行评估<br>为每位宝贝制定专属的个人营养计划<br>14类食物，30种以上食材，阶段性量化配比<br>确保宝宝吃得安全，吃得健康"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="提升宝宝六大能力" src="/index/index-pic-6.png"></kidchoo-content-only-img>
        <kidchoo-content-only-img class="index-five-serves" title="祈初五大特色服务" src="/index/index-pic-7.svg"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="八大安全保障，父母安心托付" src="/index/index-pic-8.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img class="index-phone-pic" title="客户见证" src="index/index-pic-9.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-picture-switch title="祈初全日制托育，值得信赖"></kidchoo-picture-switch>
        <kidchoo-line />
    </div>
    <div class="ds-index" v-if="$mq == 'desktop'">
        <kidchoo-first-pic>
            <div slot="first-pic-content">
                <div class="ds-first-pic-block">
                </div>
                <div class="ds-first-pic-content">
                    <h2>祈初0-3岁全日制托育</h2>
                    <p>祈初全日制托育，为0-2岁宝宝家庭提供<br>
                    全日托、半日托、一对一精致早教、<br>
                    妈妈沙龙、育儿测评与咨询等一体式服务，<br>
                    早七点半至晚六点半，11个小时超长托育时间。</p>
                    <button class="ds-first-pic-btn" @click="play_video = true">点击观看</button>
                </div>
                <div class="ds-index-left-ball first"></div>
                <div class="ds-index-left-ball second"></div>
                <div class="ds-index-left-ball third"></div>
                <div class="ds-index-right-ball first"></div>
                <div class="ds-index-right-ball second"></div>
                <div class="ds-index-right-ball third"></div>
            </div>
        </kidchoo-first-pic>
        <div class="ds-index-wrap">
            <kidchoo-content-only-img title="祈初托育特色，医食教合一" 
            src="/index/ds-index-pic-3.png"></kidchoo-content-only-img>
            <div class="ds-index-wrap-block">
                <div class="ds-index-wrap-block-img"
                style="background-image: url('/index/index-pic-2.jpg')"></div>
                <div class="ds-index-wrap-block-content"
                style="background-color:#F2F2F2;">
                    <h4>祈初为宝贝提供适龄环境</h4>
                    <p>基于婴幼儿成长特征设置功能分区<br>
                    含动态游戏区、静态游戏区、绘本区、角色扮演区、<br>
                    用餐/午睡区、户外游戏区等<br>
                    让宝贝在有准备的环境中玩耍、模仿和学习<br>
                    </p>
                </div>
            </div>
            <div class="ds-index-wrap-block">
                <div class="ds-index-wrap-block-img"
                style="background-image: url('/index/index-pic-4.jpg')"></div>
                <div class="ds-index-wrap-block-content"
                style="background-color:#FCF5E3;">
                    <h4>三重保护监测保护宝宝健康</h4>
                    <p>综合日本、台湾的托育健康管理系统<br>
                    引进比利时全套原装进口益生菌空气净化系统，<br>
                    医院手术室专用人机同室消毒机等专用设施<br>
                    保持中心的恒温恒湿，把控每个区域的环境消杀，<br>
                    为宝宝健康提供全面保障<br>
                    </p>
                </div>
            </div>
            <div class="ds-index-wrap-block">
                <div class="ds-index-wrap-block-img"
                style="background-image: url('/index/index-pic-3.jpg');background-position:20% center;"></div>
                <div class="ds-index-wrap-block-content"
                style="background-color:#EDEDED;">
                    <h4>五位老师照顾成长只为更全面的呵护</h4>
                    <p>依据婴幼儿生长发育各阶段，<br>
                    分班照料，严格控制园所照料比例（不高于1:4）<br>
                    给予宝贝更加专业全面的照顾，培养宝贝良好作息<br>
                    让妈妈稳稳安心<br>
                    </p>
                </div>
            </div>
            <div class="ds-index-wrap-block">
                <div class="ds-index-wrap-block-img"
                style="background-image: url('/index/index-pic-5.jpg');"></div>
                <div class="ds-index-wrap-block-content"
                style="background-color:#FCF5E3;">
                    <h4>个性化定制饮食<br>宝宝不挑食吃得好长得壮</h4>
                    <p>婴幼儿营养师团队根据宝贝的咀嚼力、体质等情况进行评估<br>
                    为每位宝贝制定专属的个人营养计划<br><br>
                    14类食物，30种以上食材，阶段性量化配比<br>
                    确保宝宝吃得安全，吃得健康<br>
                    </p>
                </div>
            </div>
            <kidchoo-content-only-img title="八大安全保障"
            src="/index/ds-index-pic-4.png"></kidchoo-content-only-img>
            <kidchoo-content-only-img title="提升宝宝六大能力" class="ds-index-wrap-block-special"
            src="/index/index-pic-6.png"></kidchoo-content-only-img>
            <kidchoo-content-only-img title="祈初全日制托育，值得信赖" class="ds-index-wrap-block-special-2"
            src="/index/ds-index-pic-5.png"></kidchoo-content-only-img>
            <kidchoo-content-only-img title="用户见证" class="ds-index-wrap-block-special-3"
            src="/index/index-pic-9.png"></kidchoo-content-only-img> 
        </div>
        <div class="ds-video-box" v-if="play_video">
            <div style="position:relative;">
                <img src="/index/ds-close-icon.png" alt="" @click="play_video = false">
                <video class="ds-index-intro" controls autoplay><source src="/index/index-intro.mov"></video>    
            </div>
        </div>
    </div>
</div>
</template>

<script>
import KidchooContentTextAndImg from "~/components/KidchooContentTextAndImg.vue";
import KidchooContentOnlyText from "~/components/KidchooContentOnlyText.vue";
import KidchooContentOnlyImg from "~/components/KidchooContentOnlyImg.vue";
import KidchooIndexClassChoice from "~/components/KidchooIndexClassChoice"
import KidchooLine from "~/components/KidchooLine.vue";
import KidchooPictureSwitch from "~/components/KidchooPictureSwitch.vue";
import KidchooFirstPic from '~/components/KidchooFirstPic.vue';

export default {
    layout: 'kidchoo',
    head:{
        title: '厦门0-3岁托儿所|早教托管班|全日托|半日托|厦门早教中心 -祈初托婴中心'
    },
    data:()=>({
        play_video: false,
    }),
    components: {
        KidchooContentTextAndImg,
        KidchooContentOnlyText,
        KidchooContentOnlyImg,
        KidchooIndexClassChoice,
        KidchooLine,
        KidchooPictureSwitch,
        KidchooFirstPic,
   },
   mounted(){

        if(this.$mq == 'desktop') {
            document.getElementById('index').classList.add('active')
            document.getElementById('rationale').classList.remove('active')
            document.getElementById('jasmine').classList.remove('active')
            document.getElementById('cherry').classList.remove('active')
            document.getElementById('lily').classList.remove('active')
            document.getElementById('cooperate').classList.remove('active')
            document.getElementById('about').classList.remove('active')
        }
        
    }
}

</script>

<style>

.index-intro {
    width: 100vw;
    height: auto;
    margin-top: 80px;
}
.index-five-serves {
    background-color: #f2f2f2;
    height: 120vw;
    padding: 15px 0;
}
.index-teacher-pic img {
    width: 80vw;
    margin: 0 10vw 20px 10vw;
}
.index-belives img {
    width: 100vw;
    margin: 0;
}
.index-phone-pic img {
    width: 60vw;
    margin: 0 20vw;
}
.ds-index {
    padding: 60px 0 100px;
}
.ds-index h2 {
    color: #7187AE;
}
.ds-index .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/index/ds-index-pic-1.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100vw;
    margin: 0 auto;
}
.ds-index .ds-first-pic-block {
    /* position: absolute;
    top:50px;
    right:5%; */
    width: 80%;
    height: 500px;
    background-image: url('/index/ds-index-pic-2.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    max-width: 1150px;
    margin: 20px auto;
}
.ds-index .ds-first-pic-content {
    position: absolute;
    top: 25%;
    width: 100vw;
    /* max-width: 1300px; */
}
.ds-index .ds-first-pic-content h2,
.ds-index .ds-first-pic-content p {
    text-align: center;
}
.ds-index .ds-first-pic-content h2 {
    font-size: 40px;
}
.ds-index .ds-first-pic-content p {
    margin-top: 30px;
    color: #fff; 
}
.ds-index .ds-first-pic-btn {
    background: #F4CD89;
    color: #7187AE;
    margin: 60px auto 0;
    display: block;
    border-style: none;
    border-radius: 30px;
    width: 140px;
    height: 50px; 
    font-size: 20px;
    font-weight: bold; 
}
.ds-index-left-ball.first {
    width: 150px;
    height: 150px;
    border-radius: 90px;
    position: absolute;
    top: 150px;
    left: 170px;
    animation: left-first 15s ease 0s infinite;
    background: #F4CD89;
    opacity: .5;
}
@keyframes left-first {
  0%   {top: 150px;left: 170px;}
  25%  {top: 200px;left: 220px;}
  50%  {top: 170px;left: 160px;width:145px;height:145px;}
  55%  {top: 170px;left: 140px;width:145px;height:145px;}
  65%  {top: 180px;left: 120px;width:140px;height:140px;}
  90% {top: 130px;left: 150px;width:145px;height:145px;}
  100% {top: 150px;left: 170px;width:150px;height:150px;}
}
.ds-index-left-ball.second {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    position: absolute;
    top: 320px;
    left: 100px;
    animation: left-second 15s ease 0s infinite alternate;
    background: #7187AE;
    opacity: .5;
}
@keyframes left-second {
  0%   {top: 320px;left: 160px;}
  25%  {top: 290px;left: 180px;}
  40%  {top: 270px;left: 200px;}
  55%  {top: 305px;left: 140px;;}
  70% {top: 350px;left: 130px;}
  90% {top: 330px;left: 170px;}
  100% {top: 320px;left: 190px;}
}
.ds-index-left-ball.third {
    width: 110px;
    height: 110px;
    border-radius: 55px;
    position: absolute;
    top: 450px;
    left: 130px;
    animation: left-third 15s ease 0s infinite alternate;
    background: #F4CD89;
    opacity: .5;
}
@keyframes left-third {
  0%   {top: 450px;left: 130px;}
  25%  {top: 400px;left: 80px;}
  50%  {top: 390px;left: 120px;}
  75%  {top: 430px;left: 90px;}
  90% {top: 460px;left: 150px;}
  100% {top: 450px;left: 130px;}
}
.ds-index-right-ball.first {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    position: absolute;
    top: 30px;
    right: 50px;
    animation: right-first 15s ease 0s infinite;
    background: #F4CD89;
    opacity: .5;
}
@keyframes right-first {
  0%   {top: 30px;right: 50px;}
  25%  {top: 50px;right: 80px;}
  50%  {top: 80px;right: 100px;}
  75%  {top: 40px;right: 70px;}
  90% {top: 60px;right: 75px;}
  100% {top: 30px;right: 50px;}
}
.ds-index-right-ball.second {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 300px;
    right: 200px;
    animation: right-second 15s ease 0s infinite;
    background: #7187AE;
    opacity: .5;
}
@keyframes right-second {
  0%   {top: 300px;right: 200px;}
  25%  {top: 270px;right: 250px;}
  50%  {top: 290px;right: 240px;}
  75%  {top: 330px;right: 190px;}
  90% {top: 310px;right: 210px;}
  100% {top: 300px;right: 200px;}
}
.ds-index-right-ball.third {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    top: 400px;
    right: 40px;
    animation: right-third 15s ease 0s infinite;
    background: #F4CD89;
    opacity: .5;
}
@keyframes right-third {
  0%   {top: 400px;right: 40px;}
  25%  {top: 350px;right: 80px;}
  50%  {top: 320px;right: 50px;}
  75%  {top: 370px;right: 90px;}
  90% {top: 410px;right: 60px;}
  100% {top: 400px;right: 40px;}
}
.ds-index .content-only-img h2 {
    text-align: left;
    margin: 80px auto 30px; 
}
.ds-index .content-only-img img {
    margin-bottom: 20px;
}
.ds-index-wrap-block {
    width: 85%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    max-width: 1300px;

}
.ds-index-wrap-block-img {
    width: 30%;
    height: 300px;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: cover;  
    background-position: 60% center; 
}
.ds-index-wrap-block-content {
    width: 70%;
    height: 280px;
    border-radius: 15px;
    padding: 55px 0 0 30px;
}
.ds-index-wrap-block-content h4 {
    color: #7187AE;
    margin-bottom: 30px;
}
.ds-index-wrap-block-content p {
    color: #707070;
    font-size: 14px;
}
.ds-index-wrap-block-special img {
    width: 75%;
    margin: 0 auto;
    display: block;
}
.ds-index-wrap-block-special-2 {
    height: 300px;
    background: #FFFCFC;
    box-shadow: 0 0 0 5vw #FFFCFC;
}
.ds-index-wrap-block-special-2 h2 {
    margin-bottom: 60px !important; 
}
.ds-index-wrap-block-special-3 img {
    width: 30%;
    margin: 0 auto;
    display: block;
}
.ds-video-box {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ds-index-intro {
    width: 800px;
    height: auto;
    margin: 80px auto;
}
.ds-video-box img {
    position: absolute;
    right: -50px;
    top: 50px;
    cursor: pointer;
}
</style>
