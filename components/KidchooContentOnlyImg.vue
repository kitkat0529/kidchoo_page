<template>
    <div class="content-only-img">
       <h2 v-html="title"></h2>
       <img :src="src" alt="">
    </div> 
</template>
<script>
export default {
    props: {
        title:String,
        src:String,
    }
}
</script>
<style>
 
.content-only-img h2 {
    text-align: center;
    font-size: 20px;
    color: #7187ac;
    margin: 20px;
    line-height: 30px;
}
.content-only-img img {
    width: 90vw;
    margin:0 5vw;
}
@media (min-width: 769px) {
    .content-only-img {
        width: 90%;
        margin: 0 auto;
        max-width: 1170px;
    }
    .content-only-img h2{
        font-size: 26px;
        line-height: 35px;
    }
    .content-only-img img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
}
</style>
