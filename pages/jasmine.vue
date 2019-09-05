<template>
    <div>
        <div v-if="$mq == 'mobile'">
            <kidchoo-first-pic src="/class/ClassJasmine.png" style="margin-top:80px;"></kidchoo-first-pic>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="用心对待每一个宝宝" src="/class/Class-all-01.png" text="祈初托婴中心根据孩子成长规律，分为三个班级：<br>一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的<br>情绪养成及行为习惯。"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="小茉莉启蒙班<br>宝宝日常" src="/class/Class-all-02.svg"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="专业老师照顾成长<br>只为更全面的呵护" src="/class/Class-all-03.png" text="小班制托管：8个宝贝<br>标准师资配比：一教两保"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="小茉莉启蒙班课程<br>课程理论体系" src="/class/Class-all-05.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="建立安全感、培养运动能力<br>生活规律、认知启蒙" src="/class/text-2.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-only-img class="class-examples" title="课程举例" src="/class/Class-all-04.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <div class="class-jasmine-menu">
                <h2>小茉莉启蒙班每月食谱</h2>
                <img src="/class/ClassJasmine-menu-1.png" style="margin-bottom:30px">
                <img src="/class/ClassJasmine-menu-2.png">
            </div>
            <kidchoo-line />
        </div>
        <div class="ds-jasmine" v-if="$mq == 'desktop'">
            <kidchoo-first-pic style="margin-bottom:60px;">
                <div slot="first-pic-content" style="margin:400px 40px 0;display:flex;align-items:flex-end;">
                    <div style="width:300px;float:left;">
                        <p style="color:#7187AE;font-size:45px;font-weight:bold;margin:0;width:300px">小茉莉启蒙班<br>0-12个月</p>
                    </div>
                    <div>
                        <p style="color:white;font-size:25px;font-weight:500;margin:0 0 0 50px;width:700px">祈初托婴中心根据孩子成长规律，分为三个班级：<br>
                        一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的情绪养成及行为习惯。</p>
                    </div>
                </div>
            </kidchoo-first-pic>
            <kidchoo-content-only-img title="用心对待每一个宝宝" src="/rationale/ds-rationale-pic-4.png" class="ds-class-all-pic"></kidchoo-content-only-img>
            <kidchoo-content-only-img style="margin:60px auto;" title="小茉莉启蒙班 宝宝日常" src="/class/ds-jasmine-pic-2.jpg" class="ds-jasmine-img-1"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-text-and-img style="margin-top:60px;" title="专业老师照顾成长，只为更全面的呵护" src="/class/ds-class-all-pic-1.jpg" text="小班制托管：8个宝贝<br>标准师资配比：一教两保"></kidchoo-content-text-and-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-only-img style="margin:60px auto;" title="小茉莉启蒙班课程<br>课程理论体系" src="/class/ds-jasmine-pic-3.jpg" class="ds-jasmine-img-2"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-only-img style="margin:60px auto;" title="建立安全感、培养运动能力、生活规律、认知启蒙" src="/class/ds-jasmine-pic-4.jpg" class="ds-jasmine-img-2"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <div class="ds-jasmine-menu">
                <h2>小茉莉启蒙班每月食谱</h2>
                <img src="/class/ClassJasmine-menu-1.png" alt="">
                <img src="/class/ClassJasmine-menu-2.png" alt="">
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
            title: '厦门1岁托管班_0-1岁儿童托管早教班？-祈初托婴中心',
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
            document.getElementById('rationale').classList.remove('active')
            document.getElementById('jasmine').classList.add('active')
            document.getElementById('cherry').classList.remove('active')
            document.getElementById('lily').classList.remove('active')
            document.getElementById('cooperate').classList.remove('active')
            document.getElementById('about').classList.remove('active')
        }
        
    }
}
</script>
<style>
.class-jasmine-menu h2 {
    text-align: center;
    font-size: 20px;
    color: #7187ac;
    margin: 20px;
    line-height: 30px;
}
.class-jasmine-menu img {
    width: 90vw;
    margin:0 5vw;
}

.ds-jasmine {
    padding: 60px 0 150px;
}
.ds-jasmine .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/class/ds-jasmine-pic-1.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%; 
    max-width: 100vw;
    margin: 0 auto;
}
.ds-jasmine h2 {
    margin: 80px 0 40px;
}
.ds-class-all-pic img {
    width: 80%;
}
.ds-jasmine-img-1 img {
    width: 70%;
    display: block;
    margin: 0 auto;
}
.ds-jasmine-img-2 img {
    width: 50%;
    display: block;
    margin: 0 auto;
}
.ds-jasmine-menu h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 80px 0 30px;
    text-align:center;
}
.ds-jasmine-menu img {
    display: block;
    margin: 50px auto;
    width: 40%;
}
</style>
