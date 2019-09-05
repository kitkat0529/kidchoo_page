<template>
    <div>
        <div v-if="$mq == 'mobile'">
            <h2 class="company-cooperate-h2" style="margin-top:80px;">企业合作</h2>
            <kidchoo-first-pic src="/companycooperate/companycooperate-pic-1.png"></kidchoo-first-pic>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="职场家长面临什么问题？" src="/companycooperate/companycooperate-pic-2.png" text="婆婆带？家庭矛盾<br>保姆带？经济压力<br>辞职在家？职场目标改变<br>自己带？精力不足影响工作效率"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <kidchoo-content-only-img title="企业又面临人才流失" src="/companycooperate/companycooperate-pic-3.svg"></kidchoo-content-only-img>
            <kidchoo-line />
            <kidchoo-content-text-and-img title="祈初托婴中心" src="/class/Class-all-03.png" text="帮助企业留主人才，吸引人才，提升工作效率"></kidchoo-content-text-and-img>
            <kidchoo-line />
            <h2 class="company-cooperate-h2">祈初可以提供哪些解决方案？</h2>
            <div class="company-cooperate-content">
                <h2>企业与祈初合办托育中心</h2>
                <p>企业为员工提供儿童托育，<br>极大解决了员工的子女看护、子女教育和家庭问题，<br>给员工子女更好的教育环境，是给员工最好的福利，<br>仅需几名管理者的招聘费用，<br>即可解决几十名员工的子女托育问题，更具超高性价比。<br><br>祈初为企业提供从选址、装修、指导师的筛选<br>与管理、安排员工子女入园<br>到提供全日制的托育服务整体解决方案，<br>让企业安心，让员工放心。</p>
                <h2>企业团购</h2>
                <p>企业为员工提供福利，与祈初签订合作协议，<br>给予企业内部员工合作价格，<br>解决企业员工子女看护、教育等家庭问题，<br>给孩子争取福利。</p>
            </div>
            <kidchoo-line />
            <kidchoo-content-only-text title="商务合作" text="企业合作请联系0592-5605655"></kidchoo-content-only-text>
            <kidchoo-line />
        </div>
        <div class="ds-cooperate" v-if="$mq == 'desktop'">
            <kidchoo-first-pic>
                <div slot="first-pic-content" style="margin:250px 40px 0">
                    <p style="color:white;font-size:45px;font-weight:bold;margin:0;">祈初托婴中心<br>为企业提供托育/早教合一<br>的整体解决方案</p>
                    <div style="float:left;">
                        <div style="color:white;font-size:25px;float:left;border:solid white 2px;border-radius:35px;padding:10px 20px;margin:20px 10px;">合办托育中心</div>
                        <div style="color:white;font-size:25px;float:left;border:solid white 2px;border-radius:35px;padding:10px 20px;margin:20px 10px;">企业团购</div>
                    </div>
                </div>
            </kidchoo-first-pic>
            <kidchoo-content-only-img src="/companycooperate/ds-cooperate-pic-2.jpg" class="ds-cooperate-only-img" style="margin-top:80px;"></kidchoo-content-only-img>
            <kidchoo-content-only-img src="/companycooperate/ds-cooperate-pic-3.jpg" class="ds-cooperate-only-img"></kidchoo-content-only-img>
            <div class="ds-cooperate-text">
                <div class="ds-cooperate-text-block">
                    <h2>祈初可以提供哪些解决方案？</h2>
                    <h5>企业与祈初合办托育中心</h5>
                    <p>企业为员工提供儿童托育，极大解决了员工的子女看护、子女教育和家庭问题，给员工子女更好的教育环境，是给员工最好的福利，仅需几名管理者的招聘费用，即可解决几十名员工的子女托育问题，更具超高性价比。<br><br>
                    祈初为企业提供从选址、装修、指导师的筛选与管理、安排员工子女入园到提供全日制的托育服务整体解决方案，让企业安心，让员工放心。</p>
                    <h5>企业团购</h5>
                    <p>企业为员工提供福利，与祈初签订合作协议，给予企业内部员工合作价格，解决企业员工子女看护、教育等家庭问题，给孩子争取福利。</p>
                </div>
            </div>
            <kidchoo-content-only-img class="ds-cooperate-img-1" src="/companycooperate/ds-cooperate-pic-4.jpg"></kidchoo-content-only-img>
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
            title: '企业合作-合办日托品牌|祈初托婴中心',
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
            document.getElementById('lily').classList.remove('active')
            document.getElementById('cooperate').classList.add('active')
            document.getElementById('about').classList.remove('active')
       }
       
   }
}
</script>
<style>
.company-cooperate-h2 {
    text-align: center;
    font-size: 20px;
    color: #7187ac;
    margin: 20px;
    line-height: 30px;
}
.company-cooperate-content {
    width: 100vw;
    height: 410px;
    background-color: #fcf8f4;
}
.company-cooperate-content h2 {
    text-align: center;
    font-size: 23px;
    color: #edc988;
    line-height: 30px;
    padding: 15px;
    margin-bottom: 0;
}
.company-cooperate-content p {
    width: 100vw;
    text-align: center;
    font-size: 12px;
    color: gray;
    line-height: 17px;
    padding: 10px;
    margin-bottom:0px; 
}

.ds-cooperate {
    padding: 60px 0 200px;
}
.ds-cooperate .first-pic {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url('/companycooperate/ds-cooperate-pic-1.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%; 
    max-width: 100vw;
    margin: 0 auto;
}
.ds-cooperate-text {
    margin: 100px 0 0;
    width: 100vw;
    height: 500px;
    background: #FCF8F4;
    /* box-shadow: 0 0 0 5vw #FCF8F4;  */
}
.ds-cooperate-text-block {
    max-width: 1000px;
    margin: 0 auto;
    width: 80%;
    padding: 80px 0;
}
.ds-cooperate-text h2 {
    font-size: 26px;
    color:#7187AE;
    margin: 0 0 40px;
    text-align:left;
}
.ds-cooperate-text h5 {
    color: #EDC988;
    font-size: 20px;
}
.ds-cooperate-text p {
    color:#707070;
    font-size: 16px;
}
.ds-cooperate-img-1 {
    margin-top: 150px; 
}
.ds-cooperate-img-1 img {
    width: 70%;
    display: block;
    margin: 0 auto;
}
.ds-cooperate-only-img img {
    width: 90%;
}
</style>
