<template>
    <div>
        <div v-if="$mq == 'mobile'">
            <kidchoo-content-text-and-img style="margin-top:80px;" title="关于祈初" src="/about/aboutkidchoo-pic-1.png" text="祈初托婴中心由两岸医食教专业人士共同发起，<br>基于社区和企业需求，是一家专注于4个月-24个月<br>婴幼儿日间托管照料服务机构。<br>秉承“养育为主，教育为辅”的运营理念，<br>为家庭提供全日托、半日托、精致早教、<br>育儿测评和咨询等服务。"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-picture-switch title="企业荣誉"></kidchoo-picture-switch>
            <kidchoo-line />
            <kidchoo-content-only-img title="发展历程" src="/about/aboutkidchoo-pic-2.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <div class="about-map">
                <h2>祈初祥店中心</h2>
                <no-ssr><kidchoo-about-map v-if="is_client"></kidchoo-about-map></no-ssr>
                <p>祈初祥店中心地址：<br>厦门市湖里区祥店里164号103单元</p>
            </div>
            <kidchoo-line />
            <div class="about-member">
                <h2>诚聘英才</h2>
                <img src="/about/aboutkidchoo-pic-3.jpg" alt="">
                <h4>托班老师</h4>
                <p class="about-member-need">岗位职责</p>
                <p class="about-member-need-content">1、结合领先的幼儿教育理念，培养和提升幼儿的全面素质<br>2、负责班级的教学活动、环境创设、制作玩教具<br>3、记录幼儿在园的一日生活、记录发展报告<br>4、与家长沟通、互动，做好家园共育</p>
            </div>
            <div class="about-member">
                <img src="/class/Class-all-03.png">
                <h4>早教老师</h4>
                <p class="about-member-need">岗位职责</p>
                <p class="about-member-need-content">1、认真研读教案、备课，授课，确保课程质量<br>2、在中心热情友善地与家长和孩子互动，游戏，服务<br>3、在课程顾问共同服务好会员，做好成长记录<br>4、定期与家长沟通孩子的表现和情况，以当面，电话，邮件等方式<br>5、协助其他部门完成工作</p>
            </div>
            <div class="about-member">
                <img src="/class/Class-all-03.png">
                <h4>护理师</h4>
                <p class="about-member-need">岗位职责</p>
                <p class="about-member-need-content">1、为婴幼儿提供生活照料和护理<br>2、需要掌握婴幼儿的养、护、教，包括饮食、饮水、睡眠、二便、三浴、卫生、生长检测、动作技能训练、智力开发、社会行为及人格培养、个性化教学等<br>3、需要指导教师、客户掌握正确的保健方法和育婴方法，传播正确的育婴观念</p>
            </div>
            <kidchoo-line />
        </div>
        <div class="ds-about" v-if="$mq == 'desktop'">
            <kidchoo-first-pic>
                <div slot="first-pic-content" style="margin:450px 40px 0">
                    <p style="color:white;font-size:50px;font-weight:bold;margin:0;">0-3岁托婴中心</p>
                    <!-- <p style="color:white;font-size:30px;font-weight:bold;">让每个孩子拥有一个美好的人生起点</p> -->
                </div>
            </kidchoo-first-pic>
            <div class="ds-about-text">
                <h2>关于祈初</h2>
                <p>祈初托婴中心坐落于厦门，专注于4个月-2岁婴幼儿的基于社区和企业的日间托管照料服务机构。秉承“养育为主，教育为辅”的运营理念，为家庭提供全日托、半日托、精致早教、育儿测评和咨询等服务，超长十一个小时营业时间，为宝宝提供专业的托育和早教服务。</p>
            </div>
            <kidchoo-content-only-img title="发展历程" class="ds-about-only-img-1"
            src="/about/ds-about-pic-2.jpg"></kidchoo-content-only-img>
            <div class="ds-about-map">
                <div class="ds-about-map-title">
                    <h2>祈初祥店中心</h2><p>地址：厦门市湖里区祥店里164号103单元</p>
                </div>
                <no-ssr><kidchoo-about-map v-if="is_client"></kidchoo-about-map></no-ssr>
            </div>
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue'
import KidchooContentTextAndImg from "~/components/KidchooContentTextAndImg.vue";
import KidchooContentOnlyText from "~/components/KidchooContentOnlyText.vue";
import KidchooContentOnlyImg from "~/components/KidchooContentOnlyImg.vue";
import KidchooFirstPic from "~/components/KidchooFirstPic.vue";
import KidchooLine from "~/components/KidchooLine.vue";
// import KidchooAboutMap from "~/components/KidchooAboutMap.vue";
import KidchooPictureSwitch from "~/components/KidchooPictureSwitch.vue";
export default {
    layout: 'kidchoo',
    data:()=>({
        is_client: false,
    }),
    head:{
        title: '厦门0-3岁托儿所-日托中心-托班|祈初全国直营', 
    },
    components: {
       KidchooContentTextAndImg,
       KidchooContentOnlyText,
       KidchooContentOnlyImg,
       KidchooLine,
       KidchooFirstPic,
       KidchooAboutMap : ()=>import('~/components/KidchooAboutMap.vue'),
       KidchooPictureSwitch,


   },
   mounted(){
       if(process.client) {
           this.is_client = true
       }
       if(this.$mq == 'desktop') {
            document.getElementById('index').classList.remove('active')
            document.getElementById('rationale').classList.remove('active')
            document.getElementById('jasmine').classList.remove('active')
            document.getElementById('cherry').classList.remove('active')
            document.getElementById('lily').classList.remove('active')
            document.getElementById('cooperate').classList.remove('active')
            document.getElementById('about').classList.add('active')
       }
   }
}

</script>
<style>

.about-belives img {
    width: 100vw;
    margin: 0;
}
.about-map h2 {
    font-size: 23px;
    color: #7187ac;
    margin: 20px;
    line-height: 30px;
    text-align: center;
}
.about-map p {
    font-size: 12px;
    color: gray;
    text-align: center;
}
.map {
    width: 100%;
    height: 300px;
}
.about-member h2 {
    font-size: 20px;
    color: #7187ac;
    margin: 20px;
    line-height: 30px;
    text-align: center;
}
.about-member img {
    width: 100vw;
    margin-bottom: 20px; 
}
.about-member h4 {
    font-size:14px; 
    font-weight: 400;
    text-align: center;
    line-height: 10px;
}
.about-member p {
    font-size: 12px;
    color: gray;
}
.about-member-need {
    margin-bottom:0;
    text-align: center; 
}
.about-member-need-content {
    padding: 10px 0 0 5px;
}


.ds-about {
    padding: 60px 0 100px;
}
.ds-about .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/about/ds-about-pic-1.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%; 
    max-width: 100vw;
    margin: 0 auto;
}
.ds-about h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 80px 0 30px;
    text-align:left;
}
.ds-about-text {
    width: 90%;
    margin: 0 auto;
    max-width: 1170px;
}
.ds-about-text p {
    width: 500px;
    color: #888686;
    margin: 0;
}
.ds-about-only-img-1 img {
    width: 75%;
}
.ds-about-map {
    margin-top: 200px; 
}
.ds-about-map-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    margin: 0 auto ;
    background: #FCF8F4;
    height: 70px;
    border-radius: 25px; 
    max-width: 1170px;
}
.ds-about-map-title h2,.ds-about-map-title p {
    margin: 0 5px !important;
}
.ds-about-map .map {
    height: 500px;
    margin-top: 60px; 
    margin-bottom: 60px; 
}
</style>
