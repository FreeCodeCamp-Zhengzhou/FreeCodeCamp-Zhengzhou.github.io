<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">FreeCodeCamp 郑州</div>
      </md-card-header>
      <md-card-content>
        <p class="has-ripple" style="margin:0 50px;">
          <md-ink-ripple />
          FreeCodeCamp郑州社区致力于为郑州本地FCC学员提供线下交流互动的平台，自2017年2月以来，FCC郑州学习小组一直有新鲜血液加入，同时在学员们积极筹划和参与下，线下Code&Coffee活动得以顺利进行。
        </p>
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en1">
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en2">
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en3">
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en4">
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en5">
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="33" class="smallcard">
            <img :src="en6">
          </md-layout>
        </md-layout>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary md-raised" @click.native="loadImage">微信公众号</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-media>
        <md-image :md-src="wximg"></md-image>
      </md-card-media>
    </md-card>
    
  </div>
</template>

<script>
import zzfccwx from './../assets/zzfcc/wx.jpg'
import en1 from './../assets/zzfcc/en1.jpg'
import en2 from './../assets/zzfcc/en2.jpg'
import en3 from './../assets/zzfcc/en3.jpg'
import en4 from './../assets/zzfcc/en4.jpg'
import en5 from './../assets/zzfcc/en5.jpg'
import en6 from './../assets/zzfcc/en6.jpg'

export default {
  name: 'zzfcc',
  data () {
    return {
      wximg: null,
      en1:en1,
      en2:en2,
      en3:en3,
      en4:en4,
      en5:en5,
      en6:en6,
    }
  },
  methods: {
    loadImage() {
      if(this.wximg == zzfccwx){
        this.wximg = null
      }else{
        this.wximg = zzfccwx
      }
    }
  },
  created(){
    this.$store.state.mytitle="FCC郑州"
  }
}
</script>

<style scoped>
.smallcard{
  padding:20px;
  height:100%;
}

</style>
