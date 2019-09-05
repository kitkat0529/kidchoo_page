<template>
    <div class="content-only-text">
       <h2 v-html="title"></h2>
       <p v-html="text"></p>
    </div> 
</template>
<script>
export default {
    props: {
        title:String,
        text:String,
    }
}
</script>
<style>
@media (max-width:899px) {
    .content-only-text h2,.content-only-text p {
        text-align: center;
    }
    .content-only-text h2 {
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
    }
    .content-only-text p {
        font-size: 12px;
        color: gray;
    }
}
</style>
