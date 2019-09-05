<template>
    <div>
        <div class="footer" v-if="$mq == 'mobile'">
            <router-link to="/order">
                <div class="footer-school"><img :src="FooterIconSchool" alt="">
                <p>预约看园</p>
                </div>
            </router-link>
            <a href="tel:05925602626">
                <div class="footer-phone"><img :src="FooterIconPhone" alt="">
                <p>电话咨询</p>
                </div>
            </a>
            <a href="https://map.baidu.com/?newmap=1&shareurl=1&l=19.171926250000002&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=13152545,2797284&s=s%26da_src%3DsearchBox.button%26wd%3D%E5%8E%A6%E9%97%A8%E5%B8%82%E6%B9%96%E9%87%8C%E5%8C%BA%E7%A5%A5%E5%BA%97%E9%87%8C164%E5%8F%B7103%E5%8D%95%E5%85%83%26c%3D1%26src%3D0%26wd2%3D%26pn%3D0%26sug%3D0%26l%3D4%26from%3Dwebmap%26biz_forward%3D%7B%22scaler%22%3A1%2C%22styles%22%3A%22pl%22%7D%26sug_forward%3D%26auth%3Dag3MgUQaeC8IM55dbzPf9zUM0a4a4aY2uxHHRBELNEBtxjhNwzWWv1GgvPUDZYOYIZuVt1cv3uVtGccZcuVtPWv3GuxtVwi04960vyACFIMOSU7ucEWe1GD8zv7u%40ZPuVteuVtegvcguxHHRBELNBBtquTTGIFdw8E62qvyCu1iifGd%26device_ratio%3D1">
                <div class="footer-map"><img :src="FooterIconMap" alt="">
                <p>地址导航</p>
                </div>
            </a>
        </div>
        <div v-if="$mq == 'desktop'">
            <div class="ds-footer">
                <div class="ds-footer-block">
                    <img src="/footer-img.png" alt="">
                    <form action="" method="post" class="ds-footer-form">
                        <input type="text" name="baby-name" placeholder="请输入宝宝昵称" required id="baby-name">
                        <input type="text" name="baby-year" placeholder="请输入宝宝月龄" required id="baby-year">
                        <input type="text" name="phone-number" placeholder="请输入家长电话" required id="phone-number">
                        <button type="submit">立即预约</button>
                    </form>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
import FooterIconMap from '~/static/footer-icon-map.svg';
import FooterIconPhone from '~/static/footer-icon-phone.svg';
import FooterIconSchool from '~/static/footer-icon-school.svg';
import Vue from 'vue';
export default {
    data:() => ({
        FooterIconMap: FooterIconMap,
        FooterIconPhone: FooterIconPhone,
        FooterIconSchool: FooterIconSchool,
    }),
}
</script>
<style>

.footer {
    position: fixed;
    width: 100vw;
    height: 65px;
    bottom: 0;
    background-color: #FFF;
    box-shadow: 0 -15px 25px rgba(0,0,0,0.1);
}
.footer div {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 0.5px solid rgba(113,135,172,0.3);
    opacity: .3;
    padding: 5px;
    height: 100%;
}
.footer div img {
    height: 28px;
}
.footer div p {
    width: 150px;
    text-align: center;
    color: #7187ac;
    font-size:12px; 
    letter-spacing: 1px;
    margin-bottom:0; 
}
.footer-map,.footer-school {
    width: 33vw;
}
.footer-phone {
    width: 34vw;
}

.ds-footer {
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    background: #EDEDED;
}
.ds-footer img {
    position: absolute;
    bottom: 0;
    width: 250px;
}
.ds-footer-form {
    margin-left: 250px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.ds-footer-block {
    max-width: 1300px;
    margin: 0 auto;
}
.ds-footer-form input {
    width: 25%;
    max-width: 200px;
    height: 40px;
    border-style: none;
    border-radius: 15px;
    border: 1px solid rgba(112,112,112,.5);
    font-size: 13px; 
    margin: 0 1%;
    padding-left: 15px;
}
.ds-footer-form button {
    width: 15%;
    max-width: 120px;
    height: 30px;
    background-color: #98A6C0;
    border-radius: 50px;
    margin: 10px 0;
    color: white;
    font-size: 14px;
    
}
</style>
