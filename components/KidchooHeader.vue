<template>
    <div>
        <div class="header" v-if="$mq == 'mobile'">
                <router-link to="/">
                <img :src="HeaderLogo" class="header-logo" alt="">
                </router-link>
                <div id="headerMenu">
                    <div class="header-hamburger" :class="showMenuOrNot" @click="toggleClass()">
                        <div class="header-hamburger-line"></div>
                    </div>
                    <div :class="showMenuOrNot" class="header-hamburger-content">
                            <!-- <router-link to="/" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/'),toggleClass()">官网首页</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/rationale" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/rationale'),toggleClass()">教育理念</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/jasmine" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/jasmine'),toggleClass()">0-1岁小茉莉班</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/cherry" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/cherry'),toggleClass()">1-2岁中樱花班</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/lily" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/lily'),toggleClass()">2-3岁大百合班</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/cooperate" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/cooperate'),toggleClass()">企业合作</div>
                            <!-- </router-link> -->
                            <!-- <router-link to="/about" style="text-decoration: none;"> -->
                                <div class="header-hamburger-choice" @click="$router.push('/about'),toggleClass()">关于我们</div>
                            <!-- </router-link> -->
                            <div class="header-hamburger-choice" style="opacity:0;"></div>
                    </div>
                </div>
        </div>
        <div class="ds-header" v-if="$mq == 'desktop'">
            <div class="ds-header-block">
                <div class="ds-header-logo">
                    <router-link to="/">
                        <img :src="HeaderLogo" class="ds-header-logo-img" alt="">
                    </router-link>
                </div>
                <div class="ds-menu">
                    <router-link to="/" style="text-decoration: none;">
                        <div class="ds-header-choice" id="index">官网首页</div>
                    </router-link>
                    <router-link to="/rationale" style="text-decoration: none;">
                        <div class="ds-header-choice" id="rationale">教育理念</div>
                    </router-link>
                    <router-link to="/jasmine" style="text-decoration: none;">
                        <div class="ds-header-choice" id="jasmine">0-1岁小茉莉班</div>
                    </router-link>
                    <router-link to="/cherry" style="text-decoration: none;">
                        <div class="ds-header-choice" id="cherry">1-2岁中樱花班</div>
                    </router-link>
                    <router-link to="/lily" style="text-decoration: none;">
                        <div class="ds-header-choice" id="lily">2-3岁大百合班</div>
                    </router-link>
                    <router-link to="/cooperate" style="text-decoration: none;">
                        <div class="ds-header-choice" id="cooperate">企业合作</div>
                    </router-link>
                    <router-link to="/about" style="text-decoration: none;">
                        <div class="ds-header-choice" id="about">关于祈初</div>   
                    </router-link>
                </div>
                <div class="ds-phone-number" style="color:#7187AE;">
                    <img src="/telephone.svg" alt="">
                    0592-5605655
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderLogo from '~/static/header-logo.png';
import Vue from 'vue';
import Vuex from 'vuex';

export default {
    data:() => ({
        HeaderLogo: HeaderLogo,
        show: false,
    }),
    props :{
        
    },
    methods:{
        toggleClass() {
            this.show = !this.show;
        }
    },
    computed: {
        showMenuOrNot() {
            return this.show ? 'open':'';
        }
    }
}

</script>
<style>

.header {
    position: fixed;
    width: 100vw;
    height: 60px;
    background-color:#fff;
    top:0;
    z-index: 999;
}
img.header-logo {
    position: absolute;
    height: 28px;
    margin: 16px;
}
/*hamburger CSS*/
.header-hamburger {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 9px;
    right: 0px;
}
.header-hamburger-line {
    position: absolute;
    display:inline-flex;
    width: 20px;
    height: 3px;
    background-color: #7187ac;
    top: 21px;
    left: 5px;
    transition-duration: 0.25s;
}
.header-hamburger-line:before,
.header-hamburger-line:after {
    position: absolute;
    display:inline-flex;
    width: 20px;
    height: 3px;
    content: " ";
    background-color: #7187ac;
}
.header-hamburger-line:before {
    top: -7px;
    left: 0;
    transition-duration: 0.25s;
}
.header-hamburger-line:after {
    top: 7px;
    left: 0;
    transition-duration: 0.25s;
}
/*hamburger結束*/

.header-hamburger-content {
    position: absolute;
    height:0;
    width: 100vw;
    z-index: 999;
    top: 60px;
    overflow-y: hidden;
    transition-duration: 0.5s;
    transition-timing-function: swing;
    background-color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.header-hamburger-content.open{
    height: 265px;
    padding: 15px 0;
}
.header-hamburger.open .header-hamburger-line {
    transition-duration: 0.5s;
    background-color: transparent;
}
.header-hamburger.open .header-hamburger-line:before {
    transition-duration: 0.5s;
    top: 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.header-hamburger.open .header-hamburger-line:after {
    transition-duration: 0.5s;
    top: 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}
.header-hamburger-choice {
    width: 40vw; 
    height: 45px;
    line-height: 42px;
    margin: 4px;
    text-align: center;
    border: 2px solid #7187ac;
    border-radius: 10px;
    color: #7187ac;
    font-weight:500;
    font-size:12px;  
}

.ds-header {
    position: fixed;
    width: 100vw;
    height: 60px;
    background: white;
    top: 0;
    z-index: 999;
    box-shadow: 0 1px 20px rgba(0,0,0,.3);
}
.ds-header-block {
    max-width: 1300px;
    margin: 0 auto;
}
.ds-header-logo {
    width: 20%;
}
.ds-header-logo-img {
    height: 30px;
    margin: 13px 20px 13px 20px;
    float: left;
}
.ds-menu {
    /* width: 900px; */
    width: calc(100% - 145px - 17%);
    height: 60px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.ds-header-choice {
    width: auto;
    font-size: 14px;
    color: #617496;
    display: flex;
    justify-content: center;
    padding-bottom: 3px;
    height: 25px;
    /* border-bottom: */
}
.ds-header-choice:hover {
    border-bottom: 2px solid rgba(97,116,150,.5);
}
.active {
    border-bottom: 2px solid rgba(97,116,150);
    color: #617496;
    font-size: 14px;
}
.ds-phone-number {
    width: 15%;
    float: left;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ds-phone-number img {
    height: 28px;
    margin-right: 10px; 
}
@media (max-width: 1000px) {
    .ds-menu {
        width: 80%;
    }
    .ds-phone-number {
        display: none;
    }
    
}
</style>
