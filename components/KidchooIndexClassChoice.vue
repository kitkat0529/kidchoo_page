<template>
    <div class="class-choice">
        <h2>祈初课程</h2>
        <div class="class-choice-box">
            <router-link to="/jasmine" class="class-choice-content"><img src="/class/class-choice-01.png" alt=""></router-link>
            <router-link to="/cherry" class="class-choice-content"><img src="/class/class-choice-02.png" alt=""></router-link>
            <router-link to="/lily" class="class-choice-content"><img src="/class/class-choice-03.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
export default {
    
}
</script>
<style>
@media (max-width: 899px) {
    .class-choice h2 {
        text-align: center;
        font-size: 23px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
    }
    .class-choice-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95vw;
        height: auto;
        margin: 0 auto;
        margin-top: 15px;
    }
    .class-choice-content {
        width: 32%;
        height: 100%;
        margin: 0 1%;
    }
    .class-choice-content img {
        width: 100%;
        height: auto;
    }
}
</style>
