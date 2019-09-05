<template>
    <div class="web-map">
        <div class="web-map-block">
            <div class="web-map-three">
                <h6>关于祈初托嬰</h6>
                <router-link to="/">
                    <p>官网首页</p>
                </router-link>
                <router-link to="/about">
                    <p>关于祈初</p>
                </router-link>
                
            </div>
            <div class="web-map-three">
                <h6>祈初早教课程</h6>
                <router-link to="/jasmine">
                    <p>0-1岁小茉莉班</p>
                </router-link>
                <router-link to="/cherry">
                    <p>1-2岁中樱花班</p>
                </router-link>
                <router-link to="/lily">
                    <p>2-3岁大百合班</p>
                </router-link>
            </div>
            <div class="web-map-three">
                <h6>祈初早教优势</h6>
                <router-link to="/rationale">
                    <p>教育理念</p>
                </router-link>
                <router-link to="/cooperate">
                    <p>企业合作</p>
                </router-link>
                <!-- <router-link to="">
                    <p>师资团队</p>
                </router-link>
                <router-link>
                    <p>安全保障</p>
                </router-link> -->
            </div>
        </div>
        <div class="web-copyright-block">
            <p style="margin-bottom: 0;">版权所有&nbsp;&copy;&nbsp;2019&nbsp;祈初托婴中心&nbsp;Inc.保留一切权利</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.web-map {
    width: 100vw;
    height: 420px;
    background: #F8F7F8;
    margin-bottom: 80px;
}
.web-map-block {
    width: 100vw;
    max-width: 1300px;
    height: 350px;
    background: #F8F7F8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}
.web-map-three {
    height: 50%;
    width: 33%;
    /* background: #000; */
    padding:0 40px 0;
}
.web-map-three:nth-child(2) {
    border-left: solid 3px rgba(152,166,192,.5);
    border-right: solid 3px rgba(152,166,192,.5);
}
.web-map-three h6 {
    color: #98A6C0;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    margin-bottom: 45px;
}
.web-map-three p {
    font-size: 14px;
    color: #617496;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 500;
}
.web-copyright-block {
    color: #707070;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100vw;
    background: #fff;
}
</style>