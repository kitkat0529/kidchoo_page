<template>
  <div>
    <div v-if="$mq == 'mobile'">
        <kidchoo-header />
        <nuxt/>
        <kidchoo-form></kidchoo-form>
        <kidchoo-info></kidchoo-info>
        <kidchoo-footer></kidchoo-footer>
    </div>
    <div v-if="$mq == 'desktop'">
        <kidchoo-header />
        <kidchoo-right-block />
        <nuxt/>
        <!-- <kidchoo-form></kidchoo-form>
        <kidchoo-info></kidchoo-info> -->
        <kidchoo-web-map></kidchoo-web-map>
        <kidchoo-footer></kidchoo-footer>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import KidchooHeader from '~/components/KidchooHeader.vue';
import KidchooForm from '~/components/KidchooForm.vue';
import KidchooInfo from '~/components/KidchooInfo.vue';
import KidchooFooter from '~/components/KidchooFooter.vue'
import KidchooRightBlock from '~/components/KidchooRightBlock.vue';
import KidchooWebMap from '~/components/KidchooWebMap.vue'
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    // sm: 450,
    mobile: 769,
    desktop: Infinity,
  }
})
export default {
    components: {
        KidchooHeader,
        KidchooForm,
        KidchooInfo,
        KidchooFooter,
        KidchooRightBlock,
        KidchooWebMap,
    },
    data:() => ({
        
    }),
    computed: { 
        
    },
    head() {
        return  {
            title: '',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
                { hid: 'description', name: 'description', content: '' },
                { property : 'og:title' , content:""},
                { property : 'og:type' , content:""},
                { property : 'og:url' , content:""},
                { property : 'og:image' , content:""},
                { property : 'og:description' , content:""},
                { property : 'og:site_name' , content:""},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/fc-logo.ico' }
            ],
        }
    },
    
}
</script>

<style lang="postcss">
body {
  font-family: arial, "Microsoft JhengHei", "微軟正黑體" !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* background: #FDFCF7; */
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
/* width */
::-webkit-scrollbar {
    width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border: none;
    border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

.contact-us-block {
    padding:10px 0 30px 0;
    background: #535353;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
}
.contact-us-block img{
    margin:30px 0 10px 0;
}

</style>

