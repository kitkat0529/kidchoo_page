<template>
    <div>
        <div v-if="$mq == 'mobile'">
            <kidchoo-first-pic src="/rationale/rationale-pic-1.png" style="margin-top:80px;"></kidchoo-first-pic>
            <kidchoo-line />
            <kidchoo-content-text-and-img class="rationale-brain" src="/rationale/rationale-pic-2.png" title="0-3岁，孩子大脑的黄金发育期" text="孩子年龄越小大脑发育速度越快，吸收能力越好；<br>科学研究结果认为：这阶段的育儿方法和教育投入<br>相比于人生各阶段是回报率最高的。"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="掌握0-3岁孩子的关键期<br>尊重孩子的独特与天赋合作" src="/class/Class-all-01.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="家校共育，让爱陪伴成长" src="/rationale/rationale-pic-4.png" text="父母是孩子的第一老师，是孩子效仿的重要对象<br>每个孩子的身上都有父母的影子<br>父母的成长要先于孩子的成长"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="基于六大教学理论进行通识教育" src="/rationale/rationale-pic-5.png" text="基于六大教学理论，简单来说，<br>就是通过满足孩子的好奇心和探索精神，<br>帮助孩子快乐学习成长。"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="教学方式：每日训练的早期教育" src="/rationale/rationale-pic-6.png" text="秉承“养育为主，教育为辅”的理念，<br>在每日的课程和生活设置中，<br>每个环节都融入了教育元素。<br>通过生活的内容和形式来对儿童进行教育。<br>——生活即教育，一日皆课堂。"></kidchoo-content-text-and-img>
            <kidchoo-line />
        </div>
        <div class="ds-rationale" v-if="$mq == 'desktop'"> 
            <kidchoo-first-pic>
                <div slot="first-pic-content" style="margin:400px 40px 0">
                    <p style="color:white;font-size:50px;font-weight:bold;margin:0;">三岁定终生</p>
                    <p style="color:white;font-size:30px;font-weight:bold;">让每个孩子拥有一个美好的人生起点</p>
                </div>
            </kidchoo-first-pic>
            <div class="ds-rationale-text">
                <h2>0-3岁，孩子大脑的黄金发育期</h2>
                <p>孩子年龄越小大脑发育速度越快，吸收能力越好；科学研究结果认为：<br>这阶段的育儿方法和教育投入相比于人生各阶段是回报率最高的。</p>
                <img style="width:70%;margin-top:30px;" src="/rationale/rationale-pic-2.png" alt="">
            </div>
            <div class="ds-rationale-text second">
                <div class="ds-rationale-text-block">
                    <h2>掌握0-3岁孩子的关键期<br>尊重孩子的独特，与孩子的天赋合作</h2>
                    <img style="width:70%;margin-top:30px;" src="/rationale/ds-rationale-pic-4.png" alt="">
                </div>
            </div>
            <div class="ds-rationale-img" >
                <!-- <img src="/rationale/ds-rationale-pic-5.jpg" alt=""> -->
                <div style="background-image:url('/rationale/ds-rationale-pic-5.jpg')"></div>
                <h2>家校共育，让爱陪伴成长</h2>
                <p>父母是孩子的第一老师，是孩子效仿的重要对象<br>每个孩子的身上都有父母的影子<br>父母的成长要先于孩子的成长</p>
            </div>
            <div class="ds-rationale-img" style="margin-bottom:60px;">
                <!-- <img src="/rationale/ds-rationale-pic-2.jpg" alt=""> -->
                <div style="background-image:url('/rationale/ds-rationale-pic-2.jpg')"></div>
                <h2>基于六大教学理论进行通识教育</h2>
                <p>基于六大教学理论，简单来说，就是通过满足孩子的好奇心<br>和探索精神，帮助孩子快乐学习成长。</p>
            </div>
            <kidchoo-line></kidchoo-line>
            <div class="ds-rationale-img third" style="margin-top:60px;margin-bottom:60px;">
                <img src="/rationale/ds-rationale-pic-3.jpg" alt="">
                <h2>教学方式：每日训练的早期教育</h2>
                <p>秉承“养育为主，教育为辅”的理念，<br>在每日的课程和生活设置中，<br>每个环节都融入了教育元素。<br>通过生活的内容和形式来对儿童进行教育。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—生活即教育，一日皆课堂。</p>
            </div>
        </div>
    </div>
</template>
<script>

import KidchooContentTextAndImg from "~/components/KidchooContentTextAndImg.vue";
import KidchooContentOnlyText from "~/components/KidchooContentOnlyText.vue";
import KidchooContentOnlyImg from "~/components/KidchooContentOnlyImg.vue";
import KidchooFirstPic from "~/components/KidchooFirstPic.vue";
import KidchooLine from "~/components/KidchooLine.vue";
export default {
    layout: 'kidchoo',
    head(){
        return {
            title: '厦门0-3托管中心-教育理念',
        }
    },
   components: {
       KidchooContentTextAndImg,
       KidchooContentOnlyText,
       KidchooContentOnlyImg,
       KidchooLine,
       KidchooFirstPic,
   },
   mounted(){
       if(this.$mq == 'desktop') {
           document.getElementById('index').classList.remove('active')
            document.getElementById('rationale').classList.add('active')
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
.rationale-brain img {
    width: 90vw;
    margin: 20px 5vw;
}



.ds-rationale .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/rationale/ds-rationale-pic-1.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%; 
    max-width: 100vw;
    margin: 0 auto;
}
.ds-rationale {
    padding: 60px 0 100px;
}
.ds-rationale-text {
    text-align: center;
    margin: 30px auto 0; 
    max-width: 1300px;

}
.ds-rationale h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 80px 0 40px;
}
.ds-rationale-text p {
    color:#707070;
    font-size: 16px;
}
.ds-rationale-text.second {
    background: #fcf8f4;
    box-shadow: 0 0 0 5vw #fcf8f4;
    margin-top: 150px; 
    max-width: 100vw;
}
.ds-rationale-text-block {
    max-width: 1300px;
    margin: 0 auto;
}
.ds-rationale-img {
    margin-top: 50px; 
    text-align: center;
}
.ds-rationale-img div {
    background-size: cover;
    background-position:center;
    width: 100vw;
    height: 600px; 
}
.ds-rationale-img img {
    width: 100%;
    /* max-width: 1300px; */
}
.ds-rationale-img h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 40px 0 40px;
}
.ds-rationale-img p {
    color:#707070;
    font-size: 16px;
}
.ds-rationale-img.third img {
    width: 30%;
    max-width: 450px;
}
</style>
