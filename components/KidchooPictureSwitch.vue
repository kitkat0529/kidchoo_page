<template>
    <div class="picture-switch">
        <h2 v-html="title"></h2>
        <hooper class="picture-switch-case" :autoPlay="true" :infiniteScroll="true" :playSpeed="2500">
            <slide class="picture-switch-box width-picture">
                <img src="/pictureswitch/pictureswitch-01.jpg" alt="">
                <p>婴幼儿潜能发展课题研究基地</p>
            </slide>
            <slide class="picture-switch-box width-picture">
                <img src="/pictureswitch/pictureswitch-02.jpg" alt="">
                <p>社团法人台湾婴幼儿潜能发展协会认证</p>
            </slide>
            <!-- <slide class="picture-switch-box"></slide> -->
            <slide class="picture-switch-box width-picture">
                <img src="/pictureswitch/pictureswitch-03.jpg" alt="">
                <p>临床营养优质服务联盟理事单位</p>
            </slide>
            <slide class="picture-switch-box width-picture">
                <img src="/pictureswitch/pictureswitch-04.jpg" alt="">
                <p>厦门市家庭服务业协会理事单位</p>
            </slide>
            <!-- <slide class="picture-switch-box"></slide> -->
            <slide class="picture-switch-box">
                <img src="/pictureswitch/pictureswitch-05.jpg" alt="">
            </slide>
            <slide class="picture-switch-box">
                <img src="/pictureswitch/pictureswitch-06.jpg" alt="">
            </slide>
            <slide class="picture-switch-box">
                <img src="/pictureswitch/pictureswitch-07.jpg" alt="">
            </slide>
            <slide class="picture-switch-box">
                <img src="/pictureswitch/pictureswitch-08.jpg" alt="">
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    props: {
        title: String,
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation
    }
}
</script>

<style>
@media (max-width: 899px) {
    .picture-switch {
        width: 100vw;
        height: auto;
    }
    .picture-switch h2 {
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
        text-align: center;
    }
    .picture-switch-case {
        height: 50vh;
    }
    .picture-switch-box img {
        display: block;
        margin: auto;
        height: 100%;
        width: auto;
    }
    .picture-switch-box.width-picture img {
        margin-top: 35px; 
        width: 90%;
        height: auto;
    }
    .picture-switch-box.width-picture p {
        font-size: 12px;
        text-align: center;
        margin: 15px 0;
        color: #7187ac;
    }
}

</style>
