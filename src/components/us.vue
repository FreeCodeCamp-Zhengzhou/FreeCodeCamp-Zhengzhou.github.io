<template>
  <div>
    <md-list style="max-width:500px;margin:0 auto;">
      <md-list-item v-for="(item,index) in usall" class="namelist">
        <md-avatar>
          <img :src="item.img" alt="People">
        </md-avatar>
        <span>{{item.name}}</span>
        <div class="icons">
          <md-button class="md-icon-button">
            <md-icon class="md-primary" >phone</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon class="md-primary" >email</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon class="md-primary" >chat_bubble</md-icon>
          </md-button>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import us1 from './../assets/us/Fay.jpg'
import us2 from './../assets/us/冯子扬.jpg'
import us3 from './../assets/us/郭建勇.jpg'
import us4 from './../assets/us/石中玉.jpg'
import us5 from './../assets/us/孙逍宇.jpg'
import us6 from './../assets/us/偷闲.jpg'
import us7 from './../assets/us/吴青.jpg'
import us8 from './../assets/us/紫电青霜.jpg'
import us9 from './../assets/us/인동.jpg'

export default {
  name: 'us',
  data () {
    return {
      usall:[
        {img:us1,name:"Fay"},
        {img:us2,name:"冯子扬"},
        {img:us3,name:"郭建勇"},
        {img:us4,name:"石中玉"},
        {img:us5,name:"孙逍宇"},
        {img:us6,name:"偷闲"},
        {img:us7,name:"吴青"},
        {img:us8,name:"紫电青霜"},
        {img:us9,name:"인동"}
        ]
    }
  },
  methods: {
    
  },
  created(){
    this.$store.state.mytitle="成员列表"
  }
}
</script>

<style scoped>
.icons{
  display:none;
}
.namelist:hover .icons{
  display:block;
}

</style>
