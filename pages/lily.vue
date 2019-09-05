<template>
    <div>
        <div v-if="$mq == 'mobile'">
            <kidchoo-first-pic src="/class/ClassLily.png" style="margin-top:80px;"></kidchoo-first-pic>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="用心对待每一个宝宝" src="/class/Class-all-01.png" text="祈初托婴中心根据孩子成长规律，分为三个班级：<br>一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的<br>情绪养成及行为习惯。"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="大百合成长班<br>宝宝日常" src="/class/Class-all-02.svg"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="专业老师照顾成长<br>只为更全面的呵护" src="/class/Class-all-03.png" text="小班制托管：12个宝贝<br>标准师资配比：两教一保"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="大百合成长班课程<br>课程理论体系" src="/class/Class-all-05.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="善于表达、自理能力、情绪教养<br>认知能力、运动能力" src="/class/ClassLily-classcontent.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-only-img class="class-examples" title="课程举例" src="/class/Class-all-04.png"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="大百合成长班每月食谱" src="/class/ClassCherry-menu.png"></kidchoo-content-only-img>
            <kidchoo-line />
        </div>
        <div class="ds-lily" v-if="$mq == 'desktop'">
            <kidchoo-first-pic style="margin-bottom:60px;">
                <div slot="first-pic-content" style="margin:400px 40px 0;display:flex;align-items:flex-end;">
                    <div style="width:300px;float:left;">
                        <p style="color:#7187AE;font-size:45px;font-weight:bold;margin:0;width:300px">大百合成长班<br>24-42个月</p>
                    </div>
                    <div>
                        <p style="color:white;font-size:25px;font-weight:500;margin:0 0 0 50px;width:700px">祈初托婴中心根据孩子成长规律，分为三个班级：<br>
                        一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的情绪养成及行为习惯。</p>
                    </div>
                </div>
            </kidchoo-first-pic>
            <kidchoo-content-only-img title="用心对待每一个宝宝" src="/rationale/ds-rationale-pic-4.png" class="ds-class-all-pic"></kidchoo-content-only-img>
            <kidchoo-content-only-img style="margin:60px auto;" title="大百合成长班 宝宝日常" src="/class/ds-cherry-pic-2.jpg" class="ds-lily-img-1"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-text-and-img style="margin-top:60px;" title="专业老师照顾成长，只为更全面的呵护" src="/class/ds-class-all-pic-1.jpg" text="小班制托管：12个宝贝<br>标准师资配比：两教一保"></kidchoo-content-text-and-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-only-img style="margin:60px auto;" title="大百合成长班课程<br>课程理论体系" src="/class/ds-jasmine-pic-3.jpg" class="ds-lily-img-2"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <kidchoo-content-only-img style="margin:60px auto;" title="语言绘本，生活自理，知识探索，运动探索" src="/class/ds-lily-pic-2.jpg" class="ds-lily-img-2"></kidchoo-content-only-img>
            <kidchoo-line></kidchoo-line>
            <div class="ds-lily-menu">
                <h2>大百合成长班每月食谱</h2>
                <img src="/class/ClassCherry-menu.png" alt="">
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
            title: '厦门2-3岁托儿所|全日托|半日托-祈初托婴中心',
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
            document.getElementById('jasmine').classList.remove('active')
            document.getElementById('cherry').classList.remove('active')
            document.getElementById('lily').classList.add('active')
            document.getElementById('cooperate').classList.remove('active')
            document.getElementById('about').classList.remove('active')
       }
       
   }
}
</script>
<style>
.ds-lily {
    padding: 60px 0 150px;
}
.ds-lily .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/class/ds-lily-pic-1.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%; 
    max-width: 100vw;
    margin: 0 auto;
}
.ds-lily h2 {
    margin: 80px 0 40px;
}
.ds-class-all-pic img {
    width: 80%;
}
.ds-lily-img-1 img {
    width: 70%;
    display: block;
    margin: 0 auto;
}
.ds-lily-img-2 img {
    width: 50%;
    display: block;
    margin: 0 auto;
}
.ds-lily-menu h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 80px 0 30px;
    text-align:center;
}
.ds-lily-menu img {
    display: block;
    margin: 50px auto;
    width: 40%;
}
</style>
