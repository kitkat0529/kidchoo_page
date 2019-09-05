<template>
    <div class="input-form-page">
        <h2>免费预约，带娃看园</h2>
        <form action="" method="post" class="input-form-content">
            <div class="input-form-content-each">
                <input type="text" name="baby-name" placeholder="宝宝姓名" required id="baby-name">
                <img src="/form-baby-name.svg" alt="">
            </div>
            <div class="input-form-content-each">
                <input type="text" name="baby-year" placeholder="宝宝月龄" required id="baby-year">
                <img src="/form-baby-year.svg" alt="">
            </div>
            <div class="input-form-content-each">
                <input type="text" name="phone-number" placeholder="家长电话" required id="phone-number">
                <img src="/form-phone-number.svg" alt="">
            </div>
            <div class="input-form-content-each">
                <input type="text" name="select-school" placeholder="选择园区" required id="select-school">
                <img src="/form-select-school.svg" alt="">
            </div>
            <button type="submit" class="form-btn">预约</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@media (max-width: 899px) {
    .input-form-page {
        width: 100vw;
        height: calc(100vh - 90px);
        background-color: #f0f2f1;
        margin-top: 60px;
    }
    .input-form-page h2 {
        padding-top:20vh; 
        font-size: 23px;
        color: #7187ac;
        line-height: 30px;
        text-align: center;
        margin: 30px auto; 
    }
    .input-form-content {
        display: flex;
        width: 80vw;
        height: 250px;
        margin: 30px 10vw;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .input-form-page input {
        width: 100%;
        height: 30px;
        padding:8px; 
        font-size: 14px; 
    }
    .input-form-content-each {
        position: relative;
        width: 300px;
    }
    .input-form-page img {
        position: absolute;
        width: 6%;
        right: 10px;
        bottom: 6px;
        opacity: .5;
    }
    .form-btn {
        width: 120px;
        height: 30px;
        background-color: #efbc67;
        border-radius: 8px;
        margin: 10px 0;
        color: white;
    }
}
</style>
