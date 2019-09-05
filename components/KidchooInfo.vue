<template>
    <div class="info">
        <div class="info-box">
            <p>热线电话：0592-5602626<br>厦门市湖里区祥店里164号103单元</p>
        </div>
        <div class="info-logo"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@media (max-width: 899px) {
    .info {
        display: flex;
        width: 100vw;
        background-color: #6889bf;
        position: relative;
        justify-content: center;
    }
    .info-box {
        height: 100px;
        margin-bottom: 60px;
    }
    .info-logo{
        position: absolute;
        background-color: white;
        width: 100px;
        height: 40px;
        border-radius: 5px;
        margin: 0 auto;
        background-image: url(/logo.png);
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center center; 
        top: -20px;
        /* right: 30vw; */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .info-box p {
        text-align: center;
        color: white;
        padding-top: 35px;
        line-height: 25px;
        font-size: 12px;
    }
}
</style>