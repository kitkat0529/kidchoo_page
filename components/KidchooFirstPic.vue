<template>
    <div class="first-pic">
        <img :src="src" alt="">
        <slot name="first-pic-content"></slot>
    </div>
</template>
<script>
export default {
    props: {
        src:String,
    }
}
</script>
<style>

.first-pic img {
    width: 100vw;
}
@media (min-width:769px) {
    .first-pic {
        max-width: 1300px;
        margin: 0 auto;
    }
    .first-pic img {
        width: 100%;
    }
}
</style>
