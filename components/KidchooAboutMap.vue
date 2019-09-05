<template>
  <div>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-marker :position="{lng: 118.150107, lat: 24.50537}" :dragging="false">
                    <bm-label content="祈初祥店中心" :labelStyle="{color: '#7187ac', fontSize : '12px', border : '1px solid #7187ac'}" :offset="{width: -30, height: 30}"/>
                </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import Vue from 'vue';
import NoSSR from 'vue-no-ssr'
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: ''
})
export default {
   data () {
        return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        is_client: false,
        }
    },
    components: {
      
    },
    methods: {
        handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 118.150107
        this.center.lat = 24.50537
        this.zoom = 18
        }
    },
    // mounted(){
    //   if(process.client) {
        
    //     Vue.use(require('vue-baidu-map'), { ak: '' });
    //     this.is_client = true;
    //   }
    // }
}
</script>


<style>
.map {
  width: 100vw;
  height: 300px;
  margin-bottom: 20px;
}
@media (min-width: 769px) {
  .map {
    max-width: 1300px;
    margin: 0 auto 20px;
  }
}
</style>