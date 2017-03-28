<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">什么是FreeCodeCamp</div>
      </md-card-header>
      <md-card-content>
        <p><img :src="imgsrc"></p>
        <p class="has-ripple" style="margin:0 50px;">
          <md-ink-ripple />
          FreeCodeCamp是由Quincy Larson创办的开源社区，它致力于帮助人们利用零散时间学习编程，内容以前端和JS全栈为主。</br>
          目前已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编程，并在社区内给予实时的帮助，同时为NPO组织给予技术支持。 </br>
          通过学习4个部分课程，你将获得FCC颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。
        </p>
      </md-card-content>
      <md-card-actions>
        <md-button href="http://www.freecodecamp.cn/">中文网站</md-button>
        <md-button href="https://www.freecodecamp.com/">官方网站</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-content>
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-medium="33" class="smallcard">
            <img :src="svg1">
            <p>完成编程挑战</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-medium="33" class="smallcard">
            <img :src="svg2"><br>
            <p>与伙伴们交流</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-medium="33" class="smallcard">
            <img :src="svg3"><br>
            <p>走上职业生涯</p>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-title">开始你的编程生涯</div>
      </md-card-header>
      <md-card-content>
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-medium="33" class="smallcard">
            <img :src="face1" class="faceimg"><br>
            <p>Through Free Code Camp, I built a robust and highly functional web app for a nonprofit. This led me to getting a fantastic job.</p>
            <p>- Meta Hirschl</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-medium="33" class="smallcard">
            <img :src="face2" class="faceimg"><br>
            <p>Free Code Camp's a great way for disabled veterans like me to retrain. I'm receiving engineering job offers, and I haven't even finished yet.</p>
            <p>- Brian Grant</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-medium="33" class="smallcard">
            <img :src="face3" class="faceimg"><br>
            <p>I started Free Code Camp with zero knowledge of web development. 6 months later, I landed my first job as a back end engineer.</p>
            <p>- Maxim Orlov</p>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-title">你能学到什么</div>
      </md-card-header>
      <md-card-content>
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code2"><br>
            <p>Html5</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code3"><br>
            <p>CSS3</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code4"><br>
            <p>JavaScript</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code1">
            <p>D3.js</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code5"><br>
            <p>数据库</p>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" class="smallcard">
            <img :src="code6"><br>
            <p>Git & github</p>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>
    
  </div>
</template>

<script>
import logo from './../assets/fcc/fcc-logo.gif'
import iconConnect from './../assets/fcc/landingIcons_connect.svg'
import iconNonprofits from './../assets/fcc/landingIcons_nonprofits.svg'
import iconPortfolio from './../assets/fcc/landingIcons_portfolio.svg'
import face1 from './../assets/fcc/nsvNixW.jpg'
import face2 from './../assets/fcc/QPpjPac.jpg'
import face3 from './../assets/fcc/wjlDigg.jpg'
import code1 from './../assets/fcc/code1.png'
import code2 from './../assets/fcc/code2.png'
import code3 from './../assets/fcc/code3.png'
import code4 from './../assets/fcc/code4.png'
import code5 from './../assets/fcc/code5.png'
import code6 from './../assets/fcc/code6.png'

export default {
  name: 'fcc',
  data () {
    return {
      imgsrc:logo,
      svg1:iconConnect,
      svg2:iconNonprofits ,
      svg3:iconPortfolio,
      face1:face1,
      face2:face2,
      face3:face3,
      code1:code1,
      code2:code2,
      code3:code3,
      code4:code4,
      code5:code5,
      code6:code6
    }
  },
  created(){
    this.$store.state.mytitle="Free Code Camp"
  }
}
</script>

<style scoped>
.smallcard{
  text-align: center;
}
.smallcard img{
  margin:0 auto;
  padding:10px;
}
.smallcard p{
  width:100%;
}
.faceimg{
  height:200px;
  width:200px;
  border-radius: 50px;
}

</style>
