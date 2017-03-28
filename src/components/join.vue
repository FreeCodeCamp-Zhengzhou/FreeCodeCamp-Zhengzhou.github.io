<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Wait for you..</div>
      </md-card-header>
      <md-card-content>
        <p class="has-ripple" style="margin:0 50px;">
          <md-ink-ripple />
          不论你是技术大牛，还是前端菜鸟，亦或是对编程感兴趣的新人，如果你对我们郑州线下交流活动感兴趣，现在就加入我们吧。很棒的是，线下交流，向大牛取经，这一切都是免费的！
        </p>
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-large="50" class="smallcard">
            <a href="https://github.com/FreeCodeCamp-Zhengzhou"><img :src="github"></a>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-large="50" class="smallcard">
            <img :src="wx"><br>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>
    
  </div>
</template>

<script>
import github from './../assets/join/github.jpg'
import wx from './../assets/join/wx.jpg'

export default {
  name: 'join',
  data () {
    return {
      github:github,
      wx:wx
    }
  },
  created(){
    this.$store.state.mytitle="加入我们"
  }
}
</script>

<style scoped>
.smallcard{
  padding:20px;
  height:100%;
}
</style>
