<template>
    <div>
        <kidchoo-header />
        <kidchoo-form-page></kidchoo-form-page>
        <kidchoo-footer></kidchoo-footer>
    </div>
</template>
<script>
import KidchooHeader from "~/components/KidchooHeader.vue";
import KidchooFooter from "~/components/KidchooFooter.vue";
import KidchooFormPage from "~/components/KidchooFormPage.vue";
export default {
    head(){
      return{
          meta:[
              { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0,' },
              
          ]
      }  
    },
    components: {
       KidchooHeader,
       KidchooFooter,
       KidchooFormPage,
   }
}
</script>
<style>

</style>
